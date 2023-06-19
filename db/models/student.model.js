const { Model, DataTypes, Sequelize } = require('sequelize')

const STUDENT_TABLE = 'student';

const StudentSchema = {
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
    defaultValue: 'student'
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
}

class Student extends Model{
  // static associate(models){

  // }
  static config(sequelize){
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: 'Student',
      timestamp: false
    }
  }
}

module.exports = { STUDENT_TABLE, StudentSchema, Student }
