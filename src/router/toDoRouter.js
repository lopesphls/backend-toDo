import { Router } from 'express';
import {
  create,
  deletar,
  edit,
  getAll,
  // eslint-disable-next-line comma-dangle
  getOne
} from '../controllers/toDoController.js';

const router = Router();

router.get('/to-do', getAll);
router.get('/to-do/:id', getOne);
router.post('/criar', create);
router.put('/editar/:id', edit);
router.delete('/deletar/:id', deletar);

export default router;
