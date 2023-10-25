const express = require('express')
const {
  addItem,
} = require('../controllers/cart.controller')
const { validateItem } = require('../utilis/middleware')

const cartRouter = express.Router()

cartRouter.post('/', validateItem, addItem)

module.exports = { cartRouter }
