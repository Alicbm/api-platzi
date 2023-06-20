const { models } = require('../libs/sequelize')

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
    const res = await models.LearningPath.findAll()
    return res
  }

  async findOne(id){
    const res = await models.LearningPath.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.LearningPath.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.LearningPath.findByPk(id)
    if(element){
      const res = await models.LearningPath.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.LearningPath.findByPk(id)
    if(element){
      const res = await models.LearningPath.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }
}

module.exports = LearningPathService