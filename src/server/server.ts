import express from 'express';
import 'dotenv/config';
import monstersRouter from './routes/monsters';
import clientsRouter from './routes/people';
import coursesRouter from './routes/courses';

const app = express();

// const PORT = 5000;

const PORT = process.env.VITE_PORT;

const name = process.env.VITE_GREETING;

console.log(name);

const greeting = [
  {
    name: 'Leke',
    age: 40
  }
]

app.use('/monsters', monstersRouter);
app.use('/clients', clientsRouter);
app.use('/courses', coursesRouter);
app.get('/', (req, res, next) => {
  res.status(200).send(greeting)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
