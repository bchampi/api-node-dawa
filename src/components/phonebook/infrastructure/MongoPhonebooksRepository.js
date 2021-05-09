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

  async getById ({ id }) {
    return await this.mongoDB.get(this.collection, null, { id })
  }

  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }
}

export default MongoPhonebooksRepository
