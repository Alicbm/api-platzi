const express = require('express')
const router = express.Router() 

const TeacherService = require('../services/teacher.service')
const service = new TeacherService();

router.get('/', async (req, res) => {
  const teacher = await service.getAdmin()
  res.json(teacher)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const teacher = await service.findOne(id)
  res.json(teacher)
})

router.post('/', async (req, res) => {
  const body = req.body;
  const teacher = await service.createOne(body);
  res.json(teacher)
})

router.patch('/:id', async (req, res) => {
  const body = req.body
  const { id } = req.params
  const teacher = await service.updateOne(id, body)
  res.json(teacher)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const teacher = await service.deleteOne(id)
  res.json(teacher)
})

module.exports = router