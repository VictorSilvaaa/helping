import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (request, response) => {
  response.send();
})

app.listen(3333);