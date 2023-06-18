class StudentService{

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
        role: 'student',
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
        role: 'student',
        twiter: 'twiter 3',
        instagram: 'instagram 3',
        facebook: 'facebook 3',
        approvedCourses: 'approvedCourses 3',
        learningPaths: 'learningPaths 3',
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

module.exports = StudentService