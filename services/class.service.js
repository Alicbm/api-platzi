class ClassService{

  constructor(){
    this.list = [
      {
        id: 1,
        name:'class 1',
        comments: [],
      },
      {
        id: 2,
        name:'class 2',
        comments: [],
      }
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

module.exports = ClassService