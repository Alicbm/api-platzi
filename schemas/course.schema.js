const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const modules = Joi.array();

const getCourseSchema = Joi.object({
  id: id.required()
})

const createCourseSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  modules: modules.optional(),
})

const updateCourseSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  modules: modules.optional(),
})

module.exports = { getCourseSchema, createCourseSchema, updateCourseSchema }