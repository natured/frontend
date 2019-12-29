import React, { Component } from 'react';
import page from '../page';
import NotFound from '../../components/static/NotFound/NotFound';

class NotFoundPage extends Component {
  static head = () => ({ title: '404' });

  render() {
    return <NotFound />;
  }
}

export default { component: page(NotFoundPage, 'page--error animated fadeIn') };
