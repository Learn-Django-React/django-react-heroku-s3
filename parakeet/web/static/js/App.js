import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import CacheBuster from './components/Utilities/CacheBuster';
import ScrollTop from "./components/Utilities/ScrollTop";
import Home from './components/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                  <ScrollTop />
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </BrowserRouter>
              </PersistGate>
            </Provider>
          );
        }}
      </CacheBuster>
    )
  }
}
