const { models } = require('../libs/sequelize')

class TeacherService{

  constructor(){
    this.list = [
      {
        id: 1,
        name: 'name 1',
        username: 'username 1',
        points: 'points 1',
        role: 'teacher',
        twiter: 'twiter 1',
        instagram: 'instagram 1',
        facebook: 'facebook 1',
        approvedCourses: 'approvedCourses 1',
        learningPaths: 'learningPaths 1',
        teacherCourse: []
      },
      {
        id: 2,
        name: 'name 2',
        username: 'username 2',
        points: 'points 2',
        role: 'teacher',
        twiter: 'twiter 2',
        instagram: 'instagram 2',
        facebook: 'facebook 2',
        approvedCourses: 'approvedCourses 2',
        learningPaths: 'learningPaths 2',
        teacherCourse: []
      },
      {
        id: 3,
        name: 'name 3',
        username: 'username 3',
        points: 'points 3',
        role: 'teacher',
        twiter: 'twiter 3',
        instagram: 'instagram 3',
        facebook: 'facebook 3',
        approvedCourses: 'approvedCourses 3',
        learningPaths: 'learningPaths 3',
        teacherCourse: []
      },
    ]
  }

  async getAdmin(){
    const res = await models.Teacher.findAll()
    return res
  }

  async findOne(id){
    const res = await models.Teacher.findByPk(id)
    return res
  }

  async createOne(body){
    const res = await models.Teacher.create(body)
    return res
  }

  async updateOne(id, body){
    const element = await models.Teacher.findByPk(id)
    if(element){
      const res = await models.Teacher.update(body)
      return res
    }else{
      console.log('Does not exist');
    }

  }

  async deleteOne(id){
    const element = await models.Teacher.findByPk(id)
    if(element){
      const res = await models.Teacher.destroy()
      return res
    }else{
      console.log('Does not exist');
    }
  }
}

module.exports = TeacherService