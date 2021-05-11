/**
 * @param {Object} obj
 * @param {import('../infrastructure/MongoPhonebooksRepository')} obj.PhonebooksRepository
 */
export default ({ PhonebooksRepository }) => {
  return async ({ name }) => { // parameters
    if (!name) throw new Error('validation failed')
    return PhonebooksRepository.getByName({ name })
  }
}
