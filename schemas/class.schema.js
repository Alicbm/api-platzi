const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const comments = Joi.array();

const getClassSchema = Joi.object({
  id: id.required()
})

const createClassSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  comments: comments.optional(),
})

const updateClassSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  comments: comments.optional(),
})

module.exports = { getClassSchema, createClassSchema, updateClassSchema }