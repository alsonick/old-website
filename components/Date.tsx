import { format, parseISO } from 'date-fns';

type Props = {
  date: string;
};

export const Date: React.FC<Props> = (props) => {
  return (
    <time style={{ color: '#747474' }} dateTime={props.date}>
      {format(parseISO(props.date), 'LLLL d, yyyy')}
    </time>
  );
};
