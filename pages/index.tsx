import React from 'react';

// Next
import type { NextPage } from 'next';
import Link from 'next/link';

// Components
import { SpotifyActivity } from '../components/SpotifyActivity';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';
import { Wrapper } from '../components/Wrapper';

// Constants
import { BLOGS_URL_PATH } from '../lib/constants';

// Seo
import Head from '../seo/Head';

// Styles
import styles from '../styles/modules/Home.module.css';

const Home: NextPage = () => {
  const [_, setPresenceActive] = React.useState(false);
  const LINK_MARGIN_GAP = 35;

  return (
    <Layout>
      <Head
        title="Nicholas Njoki"
        description="Nicholas Njoki - software engineer & entrepreneur"
      />
      <Wrapper
        style={{
          marginTop: '20rem',
        }}
      >
        <h1>👋 Hey I&apos;m Nicholas.</h1>
        <p>{new Date().getFullYear() - 2003} y/o software engineer</p>
        <div className={styles.links__wrapper}>
          <Link href={`${BLOGS_URL_PATH}`}>
            <a style={{ marginRight: `${LINK_MARGIN_GAP}px` }}>Blogs &#8594;</a>
          </Link>
          <Link href="https://github.com/alsonick">
            <a style={{ marginRight: `${LINK_MARGIN_GAP}px` }} target="_blank">
              GitHub &#8594;
            </a>
          </Link>
          <Link href="https://twitter.com/heynickn">
            <a style={{ marginRight: `${LINK_MARGIN_GAP}px` }} target="_blank">
              Twitter &#8594;
            </a>
          </Link>
        </div>
        <SpotifyActivity setActive={setPresenceActive} />
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default Home;
