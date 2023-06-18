const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const email = Joi.string();
const points = Joi.number().integer();
const role = Joi.string();
const twiter = Joi.string();
const instagram = Joi.string();
const facebook = Joi.string();
const approvedCourses = Joi.array();
const learningPaths = Joi.array();
const teacherCourse = Joi.array();

const getTeacherSchema = Joi.object({
  id: id.required()
})

const createTeacherSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  email: email.required(),
  points: points.optional(),
  role: role.required(),
  twiter: twiter.optional(),
  instagram: instagram.optional(),
  facebook: facebook.optional(),
  approvedCourses: approvedCourses.optional(),
  learningPaths: learningPaths.optional(),
  teacherCourse: teacherCourse.required(),
})

const updateTeacherSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  email: email.optional(),
  points: points.optional(),
  role: role.optional(),
  twiter: twiter.optional(),
  instagram: instagram.optional(),
  facebook: facebook.optional(),
  approvedCourses: approvedCourses.optional(),
  learningPaths: learningPaths.optional(),
  teacherCourse: teacherCourse.optional(),
})

module.exports = { getTeacherSchema, createTeacherSchema, updateTeacherSchema }