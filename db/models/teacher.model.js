const { Model, DataTypes } = require('sequelize')

const TEACHER_TABLE = 'teacher';

const TeacherSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  points: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'teacher'
  },
  twiter: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  // approvedCourses: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   field: 'approved_courses',
  //   defaultValue: []
  // },
  // learningPaths: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   field: 'learning_paths',
  //   defaultValue: []
  // },
  // teacherCourse: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   field: 'teacher_course',
  //   defaultValue: []
  // },
}

class Teacher extends Model{
  // static associate(models){

  // }
  static config(sequelize){
    return {
      sequelize,
      tableName: TEACHER_TABLE,
      modelName: 'Teacher',
      timestamp: false
    }
  }
}

module.exports = { TEACHER_TABLE, TeacherSchema, Teacher }
