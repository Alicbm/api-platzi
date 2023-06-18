const express = require('express')
const router = express.Router() 

const StudentService = require('../services/student.service')
const service = new StudentService();

router.get('/', async (req, res) => {
  const student = await service.getAdmin()
  res.json(student)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const student = await service.findOne(id)
  res.json(student)
})

router.post('/', async (req, res) => {
  const body = req.body;
  const student = await service.createOne(body);
  res.json(student)
})

router.patch('/:id', async (req, res) => {
  const body = req.body
  const { id } = req.params
  const student = await service.updateOne(id, body)
  res.json(student)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const student = await service.deleteOne(id)
  res.json(student)
})

module.exports = router