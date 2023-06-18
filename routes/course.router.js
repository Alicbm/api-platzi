const express = require('express')
const router = express.Router()

const AdminService = require('../services/course.service')
const service = new AdminService();

const {
  getCourseSchema,
  createCourseSchema,
  updateCourseSchema
} = require('../schemas/course.schema');
const validatorHandler = require('../middlewares/validator.handler');

router.get('/', async (req, res) => {
  const course = await service.getAdmin()
  res.json(course)
})

router.get('/:id',
  validatorHandler(getCourseSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const course = await service.findOne(id)
    res.json(course)
  })

router.post('/',
  validatorHandler(createCourseSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const course = await service.createOne(body);
    res.json(course)
  })

router.patch('/:id',
  validatorHandler(updateCourseSchema, 'params'),
  validatorHandler(updateCourseSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body
    const course = await service.updateOne(id, body)
    res.json(course)
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const course = await service.deleteOne(id)
  res.json(course)
})

module.exports = router