const { models } = require('../libs/sequelize')

class UserService{
  constructor(){
    this.list = [
      {
        id: 1,
        name: 'name 1',
        email: 'email 1',
        points: 'points 1',
        role: 'student',
        twiter: 'twiter 1',
        instagram: 'instagram 1',
        facebook: 'facebook 1',
        approvedCourses: 'approvedCourses 1',
        learningPaths: 'learningPaths 1',
      },
      {
        id: 2,
        name: 'name 2',
        email: 'email 2',
        points: 'points 2',
        role: 'admin',
        twiter: 'twiter 2',
        instagram: 'instagram 2',
        facebook: 'facebook 2',
        approvedCourses: 'approvedCourses 2',
        learningPaths: 'learningPaths 2',
      },
      {
        id: 3,
        name: 'name 3',
        email: 'email 3',
        points: 'points 3',
        role: 'admin',
        twiter: 'twiter 3',
        instagram: 'instagram 3',
        facebook: 'facebook 3',
        approvedCourses: 'approvedCourses 3',
        learningPaths: 'learningPaths 3',
      },
    ]
  }

  async getAdmin(){
    const res = await models.Admin.findAll()
    return res
  }

  async findOne(id){
    const res = await models.Admin.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.Admin.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.Admin.findByPk(id)
    if(element){
      const res = await models.Admin.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.Admin.findByPk(id)
    if(element){
      const res = await models.Admin.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }

}

module.exports = UserService