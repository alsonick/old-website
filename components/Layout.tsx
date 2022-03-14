// Styles
import styles from '../styles/modules/Layout.module.css';

export const Layout: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div className={styles.container} {...props}>
      {props.children}
    </div>
  );
};
