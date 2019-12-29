// index.js
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './pages/routes';
import configureStore from './ducks/store';

const initialState = window.INITIAL_STATE || {};

// In production, server handles setting initial env keys
// so if not in production, we need to set them here
if (process.env.NODE_ENV !== 'production') {
  initialState.app = {
    env: process.env.NODE_ENV,
    keys: {
      PUSHER_KEY: process.env.PUSHER_KEY,
      STRIPE_KEY: process.env.STRIPE_KEY,
      ALGOLIA_KEY: process.env.ALGOLIA_KEY,
      AMPLITUDE_KEY: process.env.AMPLITUDE_KEY,
    },
  };
}


const App = () => (
  <Provider store={configureStore(initialState)}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
