const express = require('express')
const router = express.Router()

const AdminService = require('../services/admin.service')
const service = new AdminService();

const {
  getAdminSchema,
  createAdminSchema,
  updateAdminSchema
} = require('../schemas/admin.schema')

const validatorHandler = require('../middlewares/validator.handler')

router.get('/', async (req, res) => {
  const admin = await service.getAdmin()
  res.json(admin)
})

router.get('/:id',
  validatorHandler(getAdminSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const admin = await service.findOne(id)
    res.json(admin)
  })

router.post('/',
  validatorHandler(createAdminSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const admin = await service.createOne(body);
    res.json(admin)
  })

router.patch('/:id',
  validatorHandler(updateAdminSchema, 'params'),
  validatorHandler(updateAdminSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body
    const admin = await service.updateOne(id, body)
    res.json(admin)
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const admin = await service.deleteOne(id)
  res.json(admin)
})

module.exports = router