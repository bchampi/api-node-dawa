/**
 * @param {Object} obj
 * @param {import('../infrastructure/MongoPhonebooksRepository')} obj.PhonebooksRepository
 */
export default ({ PhonebooksRepository }) => {
  return async ({ id }) => { // parameters
    if (!id) throw new Error('validation failed')
    return PhonebooksRepository.getById(id)
  }
}
