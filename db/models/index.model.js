const { Admin, AdminSchema } = require('./admin.model')
const { Class, ClassSchema } = require('./class.model')
const { Comment, CommentSchema } = require('./comment.model')
const { Course, CourseSchema } = require('./course.model')
const { LearningPath, LearningPathSchema } = require('./learningPath.model')
const { Module, ModuleSchema } = require('./module.model')
const { Student, StudentSchema } = require('./student.model')
const { Teacher, TeacherSchema } = require('./teacher.model')

function setupModels(sequelize){
  Admin.init(AdminSchema, Admin.config(sequelize))
  Class.init(ClassSchema, Class.config(sequelize))
  Comment.init(CommentSchema, Comment.config(sequelize))
  Course.init(CourseSchema, Course.config(sequelize))
  LearningPath.init(LearningPathSchema, LearningPath.config(sequelize))
  Module.init(ModuleSchema, Module.config(sequelize))
  Student.init(StudentSchema, Student.config(sequelize))
  Teacher.init(TeacherSchema, Teacher.config(sequelize))
}

module.exports = setupModels




