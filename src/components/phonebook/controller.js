import MongoPhonebooksRepository from './infrastructure/MongoPhonebooksRepository'
import addPhonebook from './application/createPhonebook'
import getAllPhonebooks from './application/getAllPhonebooks'
import findPhonebook from './application/findPhonebook'

const PhonebooksRepository = new MongoPhonebooksRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getPhonebooks = async (_, res, next) => {
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

export const searchPhonebook = async (req, res, next) => {
  try {
    const query = findPhonebook({ PhonebooksRepository })
    const phonebooks = await query(req.params)
    res.status(200).json({
      data: phonebooks,
      message: 'Phonebook found!'
    })
  } catch (e) {
    next(e)
  }
}
