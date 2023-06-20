const { models } = require('../libs/sequelize')

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
    const res = await models.Module.findAll()
    return res
  }

  async findOne(id){
    const res = await models.Module.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.Module.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.Module.findByPk(id)
    if(element){
      const res = await models.Module.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.Module.findByPk(id)
    if(element){
      const res = await models.Module.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }
}

module.exports = ModuleService