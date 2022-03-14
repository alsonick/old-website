// Types
import { B } from '../types/blogs';

// Constants
import { BLOGS_URL_PATH } from '../lib/constants';

// Components
import { Date } from './Date';

// Next
import Link from 'next/link';

// Styles
import styles from '../styles/modules/Card.module.css';

export const Card: React.FC<B> = (props) => {
  return (
    <Link href={`${BLOGS_URL_PATH}/${props.slug}`}>
      <div className={styles.container}>
        <h2>{props.title}</h2>
        <Date date={props.date} />
      </div>
    </Link>
  );
};
