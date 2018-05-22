import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollToTop from './ScrollToTop';
import App from './App';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root'));
