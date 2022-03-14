// Types
import { BlogsResponseType } from '../types/blogs';

// Components
import { Wrapper } from './Wrapper';
import { Layout } from './Layout';
import { Footer } from './Footer';
import { Date } from './Date';

// SEO
import Head from '../seo/Head';

// Styles
import styles from '../styles/modules/Blog.module.css';

// Next
import Link from 'next/link';

export const Blog: React.FC<BlogsResponseType> = (props) => {
  return (
    <Layout>
      <Head
        title={`Blogs - ${props.blogsData.title}`}
        description="Nicholas Njoki - software engineer & entrepreneur"
      />
      <Wrapper>
        <h1
          style={{
            marginTop: '10rem',
            marginBottom: '5px',
          }}
        >
          {props.blogsData.title}
        </h1>
        <Date date={props.blogsData.date} />
        <article
          className={styles.article__container}
          dangerouslySetInnerHTML={{ __html: props.blogsData.contentHtml }}
        />
        <Link href="/blogs">
          <a style={{ marginTop: '1rem', width: 'fit-content' }}>
            &#8592; Go back
          </a>
        </Link>
        <Footer
          style={{
            marginTop: '5rem',
          }}
        />
      </Wrapper>
    </Layout>
  );
};
