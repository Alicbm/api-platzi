class ModuleService{

  constructor(){
    this.list = [
      {
        id: 1,
        name: 'name 1',
        classes: []
      },
      {
        id: 2,
        name: 'name 2',
        classes: []
      },
      {
        id: 3,
        name: 'name 3',
        classes: []
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

module.exports = ModuleService