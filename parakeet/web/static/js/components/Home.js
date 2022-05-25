import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { store } from '../store';

import '../../scss/home.scss';

const renderLoader = () => '';

export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loggedIn: store.getState().login.loggedIn,
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title></title>
          <meta name="twitter:title" content="" />
          <link rel="canonical" href="" />
        </Helmet>
        {this.state.loggedIn ?
          <>hello world</>
        :
          <>hello world</>
        }
      </>
    )
  }
}
