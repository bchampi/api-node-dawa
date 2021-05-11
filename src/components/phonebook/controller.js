import MongoPhonebooksRepository from './infrastructure/MongoPhonebooksRepository'
import addPhonebook from './application/createPhonebook'
import getAllPhonebooks from './application/getAllPhonebooks'
import getPhonebook from './application/getPhonebook'
import updatePhonebook from './application/updatePhonebook'
import deletePhonebook from './application/deletePhonebook'

const PhonebooksRepository = new MongoPhonebooksRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const findAllPhonebooks = async (_, res, next) => {
  try {
    const query = getAllPhonebooks({ PhonebooksRepository })
    const phonebooks = await query()
    res.status(200).json({
      data: phonebooks,
      message: 'Phonebooks listed'
    })
  } catch (e) {
    next(e)
  }
}

export const createPhonebook = async (req, res, next) => {
  try {
    const query = addPhonebook({ PhonebooksRepository })
    const phonebooks = await query(req.body)
    res.status(201).json({
      data: phonebooks,
      message: 'Phonebook created!'
    })
  } catch (e) {
    next(e)
  }
}

export const findPhonebook = async (req, res, next) => {
  try {
    const query = getPhonebook({ PhonebooksRepository })
    const name = { name: req.params.name }
    const phonebooks = await query(name)
    if (phonebooks) {
      res.status(200).json({
        data: phonebooks,
        message: 'Phonebook found!'
      })
    } else res.json({ message: 'Person not found' })
  } catch (e) {
    next(e)
  }
}

export const editPhonebook = async (req, res, next) => {
  try {
    const query = updatePhonebook({ PhonebooksRepository })
    const person = {
      id: req.params.id,
      idPerson: req.body.idPerson,
      name: req.body.name,
      numberPhone: req.body.numberPhone
    }
    await query(person)
    res.status(201).json({
      data: person,
      message: 'Phonebook updated!'
    })
  } catch (e) {
    next(e)
  }
}

export const removePhonebook = async (req, res, next) => {
  try {
    const query = deletePhonebook({ PhonebooksRepository })
    const phonebooks = await query(req.params.id)
    res.status(200).json({
      id: phonebooks,
      message: 'Phonebook deleted!'
    })
  } catch (e) {
    next(e)
  }
}
