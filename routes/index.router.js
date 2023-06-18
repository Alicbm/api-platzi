const express = require('express')

const adminRouter = require('./admin.router')
const classRouter = require('./class.router')
const commentRouter = require('./comment.router')
const courseRouter = require('./course.router')
const studentRouter = require('./student.router')
const teacherRouter = require('./teacher.router')
const learningPathRouter = require('./learningPath.router')


function routerApi(app){

  // const router = express.Router()    
  // app.use('/', router)

  app.use('/admin', adminRouter)
  app.use('/class', classRouter)
  app.use('/comment', commentRouter)
  app.use('/course', courseRouter)
  app.use('/student', studentRouter)
  app.use('/teacher', teacherRouter)
  app.use('/learning-path', learningPathRouter)

}

module.exports = routerApi 