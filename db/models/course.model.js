const { DataTypes, Model } = require('sequelize')

const COURSE_TABLE ='course'

const CourseSchema = {
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
  // modules: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   defaultValue: []
  // },
}

class Course extends Model{
  // static associate(models){}

  static config(sequelize){
    return {
      sequelize,
      tableName: COURSE_TABLE,
      modelName: 'Course',
      timestamp: false
    }
  }

}


module.exports = { COURSE_TABLE, CourseSchema, Course }