const {
  createItem,
} = require('../services/cart.service')

const addItem = async (req, res) => {
  const { name, quantity, description } = req.body
  try {
    const item = await fetchItemByName(name)
    if (item) {
      return res.status(400).json({ message: 'Item already exist.' })
    }

    createItem({ name, quantity, description })
      .then(response => {
        const status = response? 200:404
        const message = response? 'Item added successfully':'Item not added'
    
        return res.status(status).json({ message, response })
      })
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err })
  }
}

module.exports = {
  addItem,
}
