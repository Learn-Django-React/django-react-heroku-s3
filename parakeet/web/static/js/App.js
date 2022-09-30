import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import CacheBuster from './components/Utilities/CacheBuster';
import ScrollTop from "./components/Utilities/ScrollTop";
import Home from './components/Home';

export default function App() {
  return (
    <CacheBuster>
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
    </CacheBuster>
  )
}
