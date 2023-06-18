const express = require('express')
const router = express.Router()

const TeacherService = require('../services/teacher.service')
const service = new TeacherService();

const {
  getTeacherSchema,
  createTeacherSchema,
  updateTeacherSchema
} = require('../schemas/teacher.schema');
const validatorHandler = require('../middlewares/validator.handler');

router.get('/', async (req, res) => {
  const teacher = await service.getAdmin()
  res.json(teacher)
})

router.get('/:id',
  validatorHandler(getTeacherSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const teacher = await service.findOne(id)
    res.json(teacher)
  })

router.post('/',
  validatorHandler(createTeacherSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const teacher = await service.createOne(body);
    res.json(teacher)
  })

router.patch('/:id',
  validatorHandler(updateTeacherSchema, 'params'),
  validatorHandler(updateTeacherSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body
    const teacher = await service.updateOne(id, body)
    res.json(teacher)
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const teacher = await service.deleteOne(id)
  res.json(teacher)
})

module.exports = router