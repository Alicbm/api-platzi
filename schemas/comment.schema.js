const Joi = require('joi')

const id = Joi.number().integer()
const studentName = Joi.string()
const studentRole = Joi.string()
const content = Joi.string()
const likes = Joi.number().integer()

const getCommentSchema = Joi.object({
  id: id.required()
})

const createCommentSchema = Joi.object({
  id: id.required(),
  studentName: studentName.required(),
  studentRole: studentRole.required(),
  content: content.required(),
  likes: likes.required(),
})

const updateCommentSchema = Joi.object({
  id: id.optional(),
  studentName: studentName.optional(),
  studentRole: studentRole.optional(),
  content: content.optional(),
  likes: likes.optional(),
})

module.exports = { getCommentSchema, createCommentSchema, updateCommentSchema }
