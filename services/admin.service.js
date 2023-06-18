class AdminService{

  constructor(){
    this.list = [
      {
        id: 1,
        name: 'admin1',
        username: 'ad1',
        age: 41,
        email: 'admin1@mail.com',
      },
      {
        id: 2,
        name: 'admin2',
        username: 'ad2',
        age: 42,
        email: 'admin2@mail.com',
      },
      {
        id: 3,
        name: 'admin3',
        username: 'ad3',
        age: 43,
        email: 'admin3@mail.com',
      },
    ]
  }

  async getAdmin(){
    return this.list
  }

  async findOne(id){
    const index = this.list.findIndex(item => item.id == id)
    return this.list[index]
  }

  async createOne(body){
    this.list.push(body)
    return body
  }

  async updateOne(id, body){
    const index = this.list.findIndex(item => item.id == id)

    this.list[index] = {
      ...this.list[index],
      ...body,
    }

    return this.list[index]

  }

  async deleteOne(id){
    const index = this.list.findIndex(item => item.id == id)
    const element = this.list[index]
    
    this.list.splice(index, 1)
    return element
  }

}

module.exports = AdminService