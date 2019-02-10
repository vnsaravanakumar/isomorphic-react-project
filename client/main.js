import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const renderRouter = Component => {
  const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
  ReactDOM.hydrate(
    <BrowserRouter>
      <Component {...initialData} />
    </BrowserRouter>, document.getElementById('root')
  );
};

renderRouter(App);
