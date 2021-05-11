/**
 * @param {Object} obj
 * @param {import('../infrastructure/MongoPhonebooksRepository')} obj.PhonebooksRepository
 */
export default ({ PhonebooksRepository }) => {
  return async ({ id, idPerson, name, numberPhone }) => { // parameters
    const person = {
      idPerson: idPerson,
      name: name,
      numberPhone: numberPhone
    }
    console.log(id, person)
    return PhonebooksRepository.update(id, person)
  }
}
