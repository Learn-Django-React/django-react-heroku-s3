import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { store } from '../store';

import '../../scss/home.scss';

const renderLoader = () => '';

const Home = () => {
  const loggedIn = store.getState().login.loggedIn;

  return (
    <>
      <Helmet>
        <title></title>
        <meta name="twitter:title" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      {loggedIn ?
        <>hello world</>
      :
        <>hello world</>
      }
    </>
  )
}

export default Home;
