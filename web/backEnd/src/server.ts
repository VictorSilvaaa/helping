import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'express';
import errorHandler from './errors/handler';
import './database/connection';

const app = express();
app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandler);

app.listen(3333);