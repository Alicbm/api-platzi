const express = require('express')
const router = express.Router() 

const CommentService = require('../services/comment.service')
const service = new CommentService();

router.get('/', async (req, res) => {
  const comment = await service.getAdmin()
  res.json(comment)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const comment = await service.findOne(id)
  res.json(comment)
})

router.post('/', async (req, res) => {
  const body = req.body;
  const comment = await service.createOne(body);
  res.json(comment)
})

router.patch('/:id', async (req, res) => {
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