import express from 'express'
import {createPhonebookSchema} from "../components/phonebook/domain/phonebook";
import { getPhonebooks, createPhonebook, searchPhonebook } from '../components/phonebook/controller'
import {validationHandler} from "../utils/middlewares/validationHandler";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

router.get(
    '/api/persons',
    getPhonebooks
)

router.get(
    '/api/persons/:idPerson',
    searchPhonebook
)

router.post(
    '/api/persons',
    validationHandler(createPhonebookSchema),
    createPhonebook
)

export default router
