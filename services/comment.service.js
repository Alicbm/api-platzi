const { models } = require('../libs/sequelize')

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
    const res = await models.Comment.findAll()
    return res
  }

  async findOne(id){
    const res = await models.Comment.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.Comment.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.Comment.findByPk(id)
    if(element){
      const res = await models.Comment.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.Comment.findByPk(id)
    if(element){
      const res = await models.Comment.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }

}

module.exports = CommentService