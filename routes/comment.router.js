const express = require('express')
const router = express.Router()

const CommentService = require('../services/comment.service')
const service = new CommentService();

const {
  getCommentSchema,
  createCommentSchema,
  updateCommentSchema
} = require('../schemas/comment.schema');

const validatorHandler = require('../middlewares/validator.handler');

router.get('/', async (req, res) => {
  const comment = await service.getAdmin()
  res.json(comment)
})

router.get('/:id',
  validatorHandler(getCommentSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const comment = await service.findOne(id)
    res.json(comment)
  })

router.post('/',
  validatorHandler(createCommentSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const comment = await service.createOne(body);
    res.json(comment)
  })

router.patch('/:id',
  validatorHandler(updateCommentSchema, 'params'),
  validatorHandler(updateCommentSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const { id } = req.params
    const comment = await service.updateOne(id, body)
    res.json(comment)
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const comment = await service.deleteOne(id)
  res.json(comment)
})

module.exports = router