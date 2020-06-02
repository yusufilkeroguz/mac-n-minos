import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router';

import App from '../../src/App';

const path = require('path');
const fs = require('fs');

export default store => (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const routerContext = {};

    const html = ReactDOMServer.renderToString(
      <ReduxProvider store={store}>
        <StaticRouter location={req.baseUrl} context={routerContext}>
            <App />
        </StaticRouter>
      </ReduxProvider>,
    );

    const reduxState = JSON.stringify(store.getState());

    console.log(htmlData);
    
    return res.send(
      htmlData
        .replace('<div id=\'root\'></div>', `<div id='root'>${html}</div>`)
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`),
    );
  });
};
