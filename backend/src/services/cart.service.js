const { Cart } = require('../models/cart.models')

const createItem = async item => (
  await Cart.create(item)
)

const fetchAllItems = async () => (
  await Cart.findAll({ order: [['id', 'ASC']] })
)

const fetchItemById = async id => (
  await Cart.findOne({
    where: { id }
  })
)

const fetchItemByName = async name => (
  await Cart.findOne({
    where: { name }
  })
)

module.exports = {
  createItem,
  fetchAllItems,
  fetchItemById,
  fetchItemByName,
}
