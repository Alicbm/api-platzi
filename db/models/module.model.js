const { DataTypes, Model } = require('sequelize')

const MODEL_TABLE ='module'

const ModuleSchema = {
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
  // classes: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   defaultValue: []
  // },
}

class Module extends Model{
  // static associate(models){}

  static config(sequelize){
    return {
      sequelize,
      tableName: MODEL_TABLE,
      modelName: 'Module',
      timestamp: false
    }
  }

}


module.exports = { MODEL_TABLE, ModuleSchema, Module }