/**
 * @param {Object} obj
 * @param {import('../infrastructure/MongoPhonebooksRepository')} obj.PhonebooksRepository
 */
export default ({ PhonebooksRepository }) => {
  return async () => PhonebooksRepository.getAll()
}
