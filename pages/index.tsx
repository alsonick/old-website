import React from 'react';

// Next
import type { NextPage } from 'next';
import Image from 'next/image';
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
          alignItems: 'center',
        }}
      >
        Working on new site!
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default Home;
