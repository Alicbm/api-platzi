const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const email = Joi.string();
const points = Joi.number().integer();
const role = Joi.string();
const twiter = Joi.string();
const approvedCourses = Joi.array();
const learningPaths = Joi.array();

const getAdminSchema = Joi.object({
  id: id.required()
})

const createAdminSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  email: email.required(),
  points: points.optional(),
  role: role.required(),
  twiter: twiter.optional(),
  approvedCourses: approvedCourses.optional(),
  learningPaths: learningPaths.optional(),
})

const updateAdminSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  email: email.optional(),
  points: points.optional(),
  role: role.optional(),
  twiter: twiter.optional(),
  approvedCourses: approvedCourses.optional(),
  learningPaths: learningPaths.optional(),
})

module.exports = { getAdminSchema, createAdminSchema, updateAdminSchema }