const express = require('express')
const router = express.Router()

const LearningPathService = require('../services/learningPath.service')
const service = new LearningPathService();

const {
  getLearningPathSchema,
  createLearningPathSchema,
  updateLearningPathSchema
} = require('../schemas/learningPath.schema');

const validatorHandler = require('../middlewares/validator.handler');

router.get('/', async (req, res) => {
  const lp = await service.getAdmin()
  res.json(lp)
})

router.get('/:id',
  validatorHandler(getLearningPathSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const lp = await service.findOne(id)
    res.json(lp)
  })

router.post('/',
  validatorHandler(createLearningPathSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const lp = await service.createOne(body);
    res.json(lp)
  })

router.patch('/:id',
  validatorHandler(updateLearningPathSchema, 'params'),
  validatorHandler(updateLearningPathSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body
    const lp = await service.updateOne(id, body)
    res.json(lp)
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const lp = await service.deleteOne(id)
  res.json(lp)
})

module.exports = router