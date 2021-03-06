import React from 'react';

// Constants
import { DISCORD_ID, WEBSOCKET_URL } from '../lib/constants';

// Types
import { Presence } from '../types/lanyard';

// Icons
import { Music } from './icons/Music';

// Styles
import styles from '../styles/modules/SpotifyActivity.module.css';

// Credit to Phineas for the lanyard implementation
// Credit to Tim for the types (https://github.com/timcole/timcole.me/blob/%F0%9F%A6%84/components/lanyard.tsx)

type Props = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  INIT_STATE = 'INIT_STATE',
  PRESENCE_UPDATE = 'PRESENCE_UPDATE',
}

type SocketEvent = {
  op: Operation;
  t?: EventType;
  d: Presence | unknown;
};

const logLanyardEvent = (eventName: string, data: any) => {
  console.log(
    `%cLanyard%c <~ ${eventName} %o`,
    'background-color: #f54bff; border-radius: 5px; padding: 3px; color: #5050ff;',
    'background: none; color: #f54bff;',
    data
  );
};

export const SpotifyActivity: React.FC<Props> = (
  { setActive, ...props }: { setActive: (active: boolean) => void } & any,
  ref: any
) => {
  const [socket, setSocket] = React.useState<WebSocket | null>(null);
  const [doing, setDoing] = React.useState<Presence>();

  const send = (op: Operation, d?: unknown): void => {
    if (socket !== null) socket.send(JSON.stringify({ op, d }));
  };

  React.useEffect(() => {
    if (socket === null) return () => {};

    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data);

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        );
        send(Operation.Initialize, { subscribe_to_id: DISCORD_ID });
      } else if (op === Operation.Event && t) {
        logLanyardEvent(t, d);

        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
          setDoing(d as Presence);
      }
    };

    socket.onclose = () => {
      setSocket(null);
    };
  }, [socket]);

  React.useEffect(() => {
    if (!socket) setSocket(new WebSocket(WEBSOCKET_URL));
  }, [socket]);

  const currentActivity = React.useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  );

  React.useEffect(() => {
    setActive(doing?.listening_to_spotify || currentActivity);
  }, [doing, currentActivity]);

  if (!doing || !doing.discord_status) return null;
  return (
    <div className={styles.container}>
      <Music
        style={{
          marginRight: '5px',
        }}
      />
      {doing?.listening_to_spotify ? (
        <div className={styles.wrapper}>
          Listening to <b>{doing.spotify.album}</b> by{' '}
          <b>{doing.spotify.artist.replaceAll(';', ',')}</b>
        </div>
      ) : (
        <div className={styles.wrapper}>Not listening to anything</div>
      )}
    </div>
  );
};
