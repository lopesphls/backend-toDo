import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connection from './database/mongodb.js';
import router from './router/toDoRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
connection()

app.listen('3000', () => {
  console.log('server rodando');
});
