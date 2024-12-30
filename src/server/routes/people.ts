import express from 'express';

const clientsRouter = express.Router();

const people = [
  {
    name: 'Sally',
    age: '23'
  },
  {
    name: 'Joseph',
    age: '45'
  },
  {
    name: 'Phillipa',
    age: '34'
  },
  {
    name: 'Mandy',
    age: '16'
  },
  {
    name: 'Leke',
    age: '40'
  }
];

clientsRouter.get('/', (req, res, next) => {
  res.status(200).send(people)
})

export default clientsRouter