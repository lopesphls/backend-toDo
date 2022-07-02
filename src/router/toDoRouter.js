import { Router } from 'express'
import {
  create,
  deletar,
  edit,
  getAll,
  getById
} from '../controllers/toDoController.js'

const router = Router()

router.get('/to-do', getAll)
router.get('/to-do/:id', getById)
router.post('/criar', create)
router.put('/editar/:id', edit)
router.delete('/deletar/:id', deletar)

export default router
