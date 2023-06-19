const { DataTypes, Model } = require('sequelize')

const LEARNING_PATH_TABLE ='learning_path'

const LearningPathSchema = {
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
  // courses: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   defaultValue: []
  // },
}

class LearningPath extends Model{
  // static associate(models){}

  static config(sequelize){
    return {
      sequelize,
      tableName: LEARNING_PATH_TABLE,
      modelName: 'LearningPath',
      timestamp: false
    }
  }

}


module.exports = { LEARNING_PATH_TABLE, LearningPathSchema, LearningPath }