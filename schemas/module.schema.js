const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const classes = Joi.array();

const getModuleSchema = Joi.object({
  id: id.required()
})

const createModuleSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  classes: classes.optional(),
})

const updateModuleSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  classes: classes.optional(),
})

module.exports = { getModuleSchema, createModuleSchema, updateModuleSchema }