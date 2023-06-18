const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const courses = Joi.array();

const getLearningPathSchema = Joi.object({
  id: id.required()
})

const createLearningPathSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  courses: courses.optional(),
})

const updateLearningPathSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  courses: courses.optional(),
})

module.exports = { getLearningPathSchema, createLearningPathSchema, updateLearningPathSchema }