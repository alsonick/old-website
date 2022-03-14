import React from 'react';

// Types
import { BlogsPropTypes } from '../types/blogs';

// Lib
import { getSortedBlogsData } from '../lib/blogs';

// Next
import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

// Components
import { SpotifyActivity } from '../components/SpotifyActivity';
import { Wrapper } from '../components/Wrapper';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Blogs } from '../components/Blogs';

// SEO
import Head from '../seo/Head';

// Styles
import styles from '../styles/modules/Blogs.page.module.css';

export const getStaticProps: GetStaticProps = () => {
  const allBlogsData = getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
};

const BlogsPage: NextPage<BlogsPropTypes> = (props) => {
  const [_, setPresenceActive] = React.useState(false);

  return (
    <Layout>
      <Head
        title="Blogs - Nicholas Njoki"
        description="Nicholas Njoki - software engineer & entrepreneur"
      />
      <Wrapper>
        <h1
          style={{
            marginTop: '10rem',
            borderBottom: '1px solid #eee',
            paddingBottom: '15px',
          }}
        >
          Blogs
        </h1>

        <SpotifyActivity setActive={setPresenceActive} />
        {props.allBlogsData ? (
          <Blogs allBlogsData={props.allBlogsData} />
        ) : (
          <div className={styles.blogs__not__found}>
            <p>There are no blogs</p>
            <Link href="/">&#8592; Go back</Link>
          </div>
        )}
        <Link href="/">
          <a style={{ marginTop: '1rem', width: 'fit-content' }}>
            &#8592; Go back
          </a>
        </Link>
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default BlogsPage;
