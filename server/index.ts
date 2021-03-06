import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';

import { Context } from './interfaces';
import render from './render';

dotenv.config({ silent: true });

global['navigator'] = global['navigator'] || {};
global['navigator'].userAgent = global['navigator'].userAgent || 'all';

const {
  ENV = process.env.NODE_ENV || 'development',
  HOST = '0.0.0.0',
  PORT = 8080,
} = process.env;

const isPROD = process.env.NODE_ENV === 'production';

const app: express.Express = express();

if (isPROD) {
  app.disable('x-powered-by');
  app.use(cors());
  app.use(compression());
} else {
  const {
    webpackDevMiddleware,
    webpackHotMiddleware,
  } = require('./middleware/webpack');
  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
}

app
  .set('env', ENV)
  .set('port', PORT)
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan(isPROD ? 'combined' : 'dev'))
  .use(express.static(path.join(__dirname, '../build/static'), { maxAge: 86400000 }))
  .use(express.static(path.join(__dirname, '../build/static/assets'), { maxAge: 86400000 }))
  .get ('*', async ( req: express.Request, res: express.Response) => {
    const context: Context = {};
    let html;
    try {
      html = await render( req, res, context );
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
    if (context.url) {
      return res.redirect (context.status || 301, context.url);
    }
    res.status (context.status || 200).send(html);
  });

app.listen(PORT, () => console.log(
  `App Server is now running on http://${HOST}:${PORT}`,
));
