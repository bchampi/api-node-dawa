import Joi from 'joi'

export const createPhonebookSchema = Joi.object({
  name: Joi.string().required(),
  numberPhone: Joi.string().required()
})
