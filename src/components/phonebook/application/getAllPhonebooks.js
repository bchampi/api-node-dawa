/**
 * @param {Object} obj
 * @param {import('../infrastructure/MongoPhonebooksRepository')} obj.PhonebooksRepository
 */
export default ({ PhonebooksRepository }) => {
  return async () => { // parameters
    return PhonebooksRepository.getAll()
  }
}
