class LearningPathService{

  constructor(){
    this.list = [
      {
        id: 1,
        name: 'path 1',
        courses: []
      },
      {
        id: 2,
        name: 'path 2',
        courses: []
      },
      {
        id: 3,
        name: 'path 3',
        courses: []
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

module.exports = LearningPathService