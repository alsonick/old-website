// Styles
import styles from '../styles/modules/Footer.module.css';

export const Footer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  return (
    <footer className={styles.container} {...props}>
      &copy; {new Date().getFullYear()} design &#38; code by Nicholas
    </footer>
  );
};
