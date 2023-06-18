class CommentService{

  constructor(){
    this.list = [
      {
        id: 1,
        studentName: 'name 1',
        studentRole: 'role student 1',
        content: 'content 1',
        likes: 1
      },
      {
        id: 2,
        studentName: 'name 2',
        studentRole: 'role student 2',
        content: 'content 2',
        likes: 2
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

module.exports = CommentService