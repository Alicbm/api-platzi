const express = require('express')
const router = express.Router() 

const AdminService = require('../services/course.service')
const service = new AdminService();

router.get('/', async (req, res) => {
  const course = await service.getAdmin()
  res.json(course)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const course = await service.findOne(id)
  res.json(course)
})

router.post('/', async (req, res) => {
  const body = req.body;
  const course = await service.createOne(body);
  res.json(course)
})

router.patch('/:id', async (req, res) => {
  const body = req.body
  const { id } = req.params
  const course = await service.updateOne(id, body)
  res.json(course)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const course = await service.deleteOne(id)
  res.json(course)
})

module.exports = router