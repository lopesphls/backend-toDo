import toDoModel from '../model/toDoModel.js'

export async function getAll (req, res) {
  const toDo = await toDoModel.find()

  res.send(toDo)
}

export async function getById (req, res) {
  const id = req.params.id
  const toDo = await toDoModel.findById(id)

  res.send(toDo)
}

export async function create (req, res) {
  const message = req.body
  await toDoModel.create(message)

  res.send('Criado com sucesso')
}

export async function edit (req, res) {
  const id = req.params.id
  const message = req.body
  const toDo = await toDoModel.findByIdAndUpdate(id, message)

  if (toDo) {
    const edited = await toDoModel.findById(id)
    res.send(edited)
  }
}

export async function deletar (req, res) {
  const id = req.params.id
  const deletado = await toDoModel.findById(id)
  await toDoModel.findByIdAndDelete(id)

  res.json({
    message: 'O item abaixo foi deletado com sucesso',
    deletado
  })
}
