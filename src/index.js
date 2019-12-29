import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './pages/routes';
import configureStore from './ducks/store';

const App = () => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
