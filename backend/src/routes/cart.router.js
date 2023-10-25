const express = require('express')
const {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} = require('../controllers/cart.controller')
const { validateItem, validateItemId } = require('../utilis/middleware')

const cartRouter = express.Router()

cartRouter.post('/', validateItem, addItem)
cartRouter.get('/', getAllItems)
cartRouter.get('/:id', validateItemId, getItemById)

module.exports = { cartRouter }
