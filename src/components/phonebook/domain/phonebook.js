import Joi from 'joi'

export const createPhonebookSchema = Joi.object({
  name: Joi.string().required(),
  numberPhone: Joi.string().required()
})

export const updatePhonebookSchema = Joi.object({
  idPerson: Joi.string().required(),
  name: Joi.string().required(),
  numberPhone: Joi.string().required()
})
