const { Model, DataTypes, Sequelize } = require('sequelize')

const ADMIN_TABLE = 'admin';

const AdminSchema = {
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
    defaultValue: "admin"
  },
  twiter: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  // approvedCourses: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY(DataTypes.),
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

class Admin extends Model{
  // static associate(models){

  // }
  static config(sequelize){
    return {
      sequelize,
      tableName: ADMIN_TABLE,
      modelName: 'Admin',
      timestamp: false
    }
  }
}

module.exports = { ADMIN_TABLE, AdminSchema, Admin }
