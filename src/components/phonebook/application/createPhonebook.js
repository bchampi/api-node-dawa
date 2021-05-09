/**
 * @param {Object} obj
 * @param {import('../infrastructure/MongoPhonebooksRepository')} obj.PhonebooksRepository
 */
export default ({ PhonebooksRepository }) => {
  return async ({ name, numberPhone }) => { // parameters
    const persons = {
      idPerson: getRandomArbitrary(10, 100000),
      name: name,
      numberPhone: numberPhone
    }

    function getRandomArbitrary (min, max) {
      return parseInt(Math.random() * (max - min) + min)
    }
    return PhonebooksRepository.add(persons)
  }
}
