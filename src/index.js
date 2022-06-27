import cors from 'cors';
import express from 'express';
import router from './router/toDoRouter.js';
const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.get('/', (req, res) => {
  res.json('Hello world');
});


app.listen('3000', () => {
  console.log('server rodando');
});
