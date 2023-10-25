const { Cart } = require('../models/cart.models')

const createItem = async item => (
  await Cart.create(item)
)

module.exports = {
  createItem,
}
