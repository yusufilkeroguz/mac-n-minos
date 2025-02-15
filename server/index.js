import express from 'express';

import indexController from './controllers/index';

const PORT = 3000;

// initialize the application and create the routes
const app = express();

app.use(indexController);

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log(`listening on ${PORT}`);
});
