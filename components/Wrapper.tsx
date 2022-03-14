// Styles
import styles from '../styles/modules/Wrapper.module.css';

export const Wrapper: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div className={styles.wrapper} {...props}>
      {props.children}
    </div>
  );
};
