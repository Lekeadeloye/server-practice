import express from "express";

const monstersRouter = express.Router()

// const monsters = [
//   {type: 'werewolf'},
//   {type: 'marlboro'},
//   {type: 'cactuar'}
// ];
interface Monster {
  type: string;
  name: string;
  age: number
}

const monsters: Monster[] = [
  { type: 'werewolf',
    name: 'Dolomite',
    age: 2000
  },
  {
    type: 'vampire',
    name: 'Dracula',
    age: 300,
  },
  {
    type: 'ogre',
    name: 'Shrek',
    age: 54,
  },
  {
    type: 'tarnished',
    name: 'Milicent',
    age: 100,
  },
  {
    type: 'dragon',
    name: 'Briar',
    age: 4000,
  },
  {
    type: 'dragon',
    name: 'Solomon',
    age: 1500,
  },
]

monstersRouter.get('/', (req, res, next) => {
  res.send(monsters)
  next()
})

monstersRouter.get('/:monster', (req, res, next) => {

  const {monster} = req.params
  const isMonster = monsters.map(monster => monster.type).includes(monster);
  
  if (!isMonster) {
    res.status(404).send('That monster does not exist in our database')
  } else {
    const result = monsters.filter(el => el.type === monster)
    res.status(200).send(result);
  } 

  next()

});
export default monstersRouter