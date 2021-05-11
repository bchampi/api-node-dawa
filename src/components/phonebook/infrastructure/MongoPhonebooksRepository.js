import MongoLib from '../../../lib/mongo'

class MongoPhonebooksRepository {
  constructor () {
    this.collection = 'phonebook'
    this.mongoDB = new MongoLib()
  }

  async add (phonebook) {
    const _id = await this.mongoDB.create(this.collection, phonebook)
    return { _id, ...phonebook }
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async getByName ({ name }) {
    return this.mongoDB.get(this.collection, null, { name })
  }

  async update (id, person) {
    return this.mongoDB.update(this.collection, id, person)
  }

  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }
}

export default MongoPhonebooksRepository
