import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line prefer-const
let toDo = [
  {
    id: uuidv4(),
    message: 'Exercício to-do',
  }, {
    id: uuidv4(),
    message: 'funcionando',
  }, {
    id: uuidv4(),
    message: 'todos os atributos',
  }, {
    id: uuidv4(),
    message: 'Agora é só me dar o 10',
  },
]
  ;

export function getAll(req, res) {
  res.send(toDo);
}

export function getOne(req, res) {
  const id = req.params.id;

  toDo.forEach((el)=>{
    if (id === el.id) {
      res.send(el.message);
    }
  });
}

export function create(req, res) {
  const id = uuidv4();

  toDo.push({id, ...req.body});
  toDo.forEach((el)=>{
    if (id === el.id) {
      res.send(el);
    }
  });
}

export function edit(req, res) {
  const id = req.params.id;

  const editar = toDo.findIndex((el)=> el.id === id);
  toDo[editar].message = req.body;
  console.log(toDo[editar]);
  res.send(toDo[editar]);
}

export function deletar(req, res) {
  const id = req.params.id;
  console.log(id);
  const delet = toDo.findIndex((el) => el.id === id);
  console.log(delet);
  toDo.splice(delet, 1);
  console.log(toDo);
  res.send('Deletado com sucesso');
};

