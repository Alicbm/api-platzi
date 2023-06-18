const express = require('express')
const router = express.Router()

const ClassService = require('../services/class.service')
const service = new ClassService();

const {
  getClassSchema,
  createClassSchema,
  updateClassSchema
} = require('../schemas/class.schema');

const validatorHandler = require('../middlewares/validator.handler');

router.get('/', async (req, res) => {
  const clase = await service.getAdmin()
  res.json(clase)
})

router.get('/:id',
  validatorHandler(getClassSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const clase = await service.findOne(id)
    res.json(clase)
  })

router.post('/',
  validatorHandler(createClassSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const clase = await service.createOne(body);
    res.json(clase)
  })

router.patch('/:id',
  validatorHandler(updateClassSchema, 'params'),
  validatorHandler(updateClassSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body
    const clase = await service.updateOne(id, body)
    res.json(clase)
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const clase = await service.deleteOne(id)
  res.json(clase)
})

module.exports = router