import express from 'express'
import { createPhonebookSchema, updatePhonebookSchema } from '../components/phonebook/domain/phonebook'
import { findAllPhonebooks, findPhonebook, createPhonebook, editPhonebook, removePhonebook } from '../components/phonebook/controller'
import { validationHandler } from '../utils/middlewares/validationHandler'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

router.get(
  '/api/persons',
  findAllPhonebooks
)

router.get(
  '/api/persons/:name',
  findPhonebook
)

router.post(
  '/api/persons',
  validationHandler(createPhonebookSchema),
  createPhonebook
)

router.put(
  '/api/persons/:id',
  validationHandler(updatePhonebookSchema),
  editPhonebook
)

router.delete(
  '/api/persons/:id',
  removePhonebook
)

export default router
