import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/api/cart`

export const createItem = async item => {
  try {
    const response = await axios.post(`${apiUrl}`, item)
    return response.data
  } catch (error) {
    console.error('Error creating item:', error)
  }
}

export const getItems = async () => {
  try {
    const response = await axios.get(`${apiUrl}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getItem = async (itemId) => {
  try {
    const response = await axios.get(`${apiUrl}/${itemId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching item:', error)
    throw error
  }
}

export const updateItem = async item => {
  try {
    await axios.put(`${apiUrl}/${item.id}`, {
      name: item.name,
      description: item.description,
      quantity: item.quantity,
    })
  } catch (error) {
    console.error('Error updating item:', error)
  }
}

export const deleteItem = async (itemId) => {
  try {
    await axios.delete(`${apiUrl}/${itemId}`)
  } catch (error) {
    console.error('Error deleting item:', error)
  }
}
