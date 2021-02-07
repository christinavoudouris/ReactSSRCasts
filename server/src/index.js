// import 'babel-polyfill'
import express from 'express'
/* 
import React from 'react'
// const renderToString = require('react-dom/server').renderToString
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'
*/

// import { matchRoutes } from 'react-router-config'
// import proxy from 'express-http-proxy'
// import Routes from './client/Routes'
import renderer from './helpers/renderer'
// import createStore from './helpers/createStore'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
  // moved to helpers/renderer.js
  /*const content = renderToString(<Home />)

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `*/

  // res.send(html)
  res.send(renderer())
})

/*app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});*/

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
