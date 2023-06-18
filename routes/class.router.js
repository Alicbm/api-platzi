const express = require('express')
const router = express.Router() 

const ClassService = require('../services/class.service')
const service = new ClassService();

router.get('/', async (req, res) => {
  const clase = await service.getAdmin()
  res.json(clase)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const clase = await service.findOne(id)
  res.json(clase)
})

router.post('/', async (req, res) => {
  const body = req.body;
  const clase = await service.createOne(body);
  res.json(clase)
})

router.patch('/:id', async (req, res) => {
  const body = req.body
  const { id } = req.params
  const clase = await service.updateOne(id, body)
  res.json(clase)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const clase = await service.deleteOne(id)
  res.json(clase)
})

module.exports = router