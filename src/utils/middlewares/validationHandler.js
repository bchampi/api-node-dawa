import createError from 'http-errors'
import { config } from '../../config'

/**
 * @param {object} data
 * @param schema
 */
const validate = (data, schema) => {
    const { error } = schema.validate(data)
    return error
}

export const validationHandler = (schema, check = 'body') => {
    return (req, _, next) => {
        const err = validate(req[check], schema)
        if (err) {
            next(createError.BadRequest(config.dev ? err : null))
        } else {
            next()
        }
    }
}
