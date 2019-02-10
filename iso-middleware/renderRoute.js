import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../shared/routes';
import HTML from '../shared/components/HTML';
import App from '../shared/App';

export default function renderRoute(req, res) {
  const branch = matchRoutes(routes, req.url);
  const promises = [];

  branch.forEach(({ route, match }) => {
    if (route.loadData) {
      promises.push(route.loadData(match));
    }
  });

  Promise.all(promises).then(data => {
    // data will be an array[] of datas returned by each promises.
    // // console.log(data)

    const context = data.reduce((context, data) => Object.assign(context, data), {});

    return res.send(renderToString(
      <HTML>
        <StaticRouter location={req.url} context={context}><App /></StaticRouter>
      </HTML>
    ));
  });
}
