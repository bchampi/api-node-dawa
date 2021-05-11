import createError from 'http-errors'

export const notFoundHandler = (_, __, next) => {
  next(createError(404))
}
