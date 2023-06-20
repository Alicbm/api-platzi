const {DataTypes, Model} = require('sequelize')

const COMMENT_TABLE = 'comment'

const CommentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true
  },
  studentName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'student_name'
  },
  studentRole: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'student_role'
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  likes  : {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}

class Comment extends Model{
  // static associate(models){

  // }

  static config(sequelize){
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'Comment',
      timestamps: false
    }
  }
}

module.exports = { COMMENT_TABLE, CommentSchema, Comment }