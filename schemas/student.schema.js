const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const email = Joi.string();
const points = Joi.number().integer();
const role = Joi.string();
const twiter = Joi.string();
const approvedCourses = Joi.array();
const learningPaths = Joi.array();

const getStudentSchema = Joi.object({
  id: id.required()
})

const createStudentSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  email: email.required(),
  points: points.optional(),
  role: role.required(),
  twiter: twiter.optional(),
  approvedCourses: approvedCourses.optional(),
  learningPaths: learningPaths.optional(),
})

const updateStudentSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  email: email.optional(),
  points: points.optional(),
  role: role.optional(),
  twiter: twiter.optional(),
  approvedCourses: approvedCourses.optional(),
  learningPaths: learningPaths.optional(),
})

module.exports = { getStudentSchema, createStudentSchema, updateStudentSchema }