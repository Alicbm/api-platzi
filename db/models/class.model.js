const { DataTypes, Model } = require('sequelize')

const CLASS_TABLE = 'class'

const ClassSchema = {
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
  // comments: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY,
  //   defaultValue: []
  // },
}

class Class extends Model {
  // static associate(models){

  // }

  static config(sequelize){
    return {
      sequelize,
      tableName: CLASS_TABLE,
      modelName: 'Class',
      timestamps: false
    } 
  }
}

module.exports = { CLASS_TABLE, ClassSchema, Class }