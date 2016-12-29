/**
 * The application entry point
 */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import domainMiddleware from 'express-domain-middleware';
import {errorHandler, notFoundHandler} from 'express-api-error-handler';
import config from 'config';
import './bootstrap';
import routes from './routes';
import loadRoutes from './common/loadRoutes';
import logger from './common/logger';

const app = express();
app.set('port', config.PORT);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(domainMiddleware);


const apiRouter = new express.Router();

loadRoutes(apiRouter, routes);

app.use('/api', apiRouter);

app.use(errorHandler({
  log: ({err, req, body}) => {
    logger.error(err, `${body.status} ${req.method} ${req.url}`);
  },
}));

app.use(notFoundHandler({
  log: ({req}) => {
    logger.error(`404 ${req.method} ${req.url}`);
  },
}));

if (!module.parent) {
  app.listen(app.get('port'), () => {
    logger.info(`Express server listening on port ${app.get('port')} in ${process.env.NODE_ENV} mode`);
  });
}

export default app;
