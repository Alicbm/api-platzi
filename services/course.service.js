const { models } = require('../libs/sequelize')

class CourseService{

  constructor(){
    this.list = [
      {
        id: 1,
        name: 'name 1',
        modules: [],
      },
      {
        id: 2,
        name: 'name 2',
        modules: [],
      },
      {
        id: 3,
        name: 'name 3',
        modules: [],
      }
    ]
  }

  async getAdmin(){
    const res = await models.Course.findAll()
    return res
  }

  async findOne(id){
    const res = await models.Course.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.Course.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.Course.findByPk(id)
    if(element){
      const res = await models.Course.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.Course.findByPk(id)
    if(element){
      const res = await models.Course.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }
}

module.exports = CourseService