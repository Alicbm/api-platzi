const express = require('express')
const router = express.Router() 

const ModuleService = require('../services/module.service')
const service = new ModuleService();

router.get('/', async (req, res) => {
  const module = await service.getAdmin()
  res.json(module)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const module = await service.findOne(id)
  res.json(module)
})

router.post('/', async (req, res) => {
  const body = req.body;
  const module = await service.createOne(body);
  res.json(module)
})

router.patch('/:id', async (req, res) => {
  const body = req.body
  const { id } = req.params
  const module = await service.updateOne(id, body)
  res.json(module)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const module = await service.deleteOne(id)
  res.json(module)
})

module.exports = router