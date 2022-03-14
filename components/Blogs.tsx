// Types
import { BlogsPropTypes } from '../types/blogs';

// Components
import { Card } from './Card';

// Styles
import styles from '../styles/modules/Blogs.module.css';

export const Blogs: React.FC<BlogsPropTypes> = (props) => {
  return (
    <div className={styles.container}>
      {props.allBlogsData.map((blog) => (
        <Card
          key={blog.slug}
          slug={blog.slug}
          title={blog.title}
          date={blog.date}
          author={blog.author}
        />
      ))}
    </div>
  );
};
