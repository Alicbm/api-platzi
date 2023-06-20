const { models } = require('../libs/sequelize')

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
    const res = await models.Class.findAll()
    return res
  }

  async findOne(id){
    const res = await models.Class.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.Class.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.Class.findByPk(id)
    if(element){
      const res = await models.Class.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.Class.findByPk(id)
    if(element){
      const res = await models.Class.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }

}

module.exports = ClassService