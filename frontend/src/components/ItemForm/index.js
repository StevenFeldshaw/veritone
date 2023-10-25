import { useState } from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  TextareaAutosize,
} from '@mui/material'

const ItemForm = ({ actionHandler, cancelHandler, item={name: '', description: '', quantity: 0} }) => {
  const [itemObj, setItemObj] = useState(item)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItemObj({ ...itemObj, [name]: value });
  }

  return (
    <>
      <div className='max-w-[600px] h-[700px] bg-white p-6 rounded-lg font-sans'>
        <p className='text-[18px] mb-[3px] font-light'>Add an Item</p>
        <p className='text-[15px] mb-4 font-extralight'>
          Add your new item below
        </p>
        <TextField
          type='text'
          name='name'
          placeholder='Item Name'
          onChange={handleInputChange}
          value={itemObj.name}
          variant='outlined'
          className='w-full mb-4'
          style={{ marginBottom: '20px' }}
        />
        <TextareaAutosize
          className='w-full border border-[#959494] rounded p-2 mb-4 duration-300 hover:border-blue-500'
          placeholder='Description'
          name='description'
          onChange={handleInputChange}
          value={itemObj.description}
          variant='outlined'
          maxLength='100'
          minRows={6}
        />
        <FormControl className='w-full'>
          <InputLabel>How many?</InputLabel>
          <Select
            name='quantity'
            label='How many?'
            value={itemObj.quantity}
            onChange={handleInputChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <div className='flex space-x-4 justify-end mt-[230px]'>
          <button className='text-black py-2 px-6 rounded hover:bg-gray-300' onClick={cancelHandler}>
            Cancel
          </button>
          <button
            onClick={() => actionHandler(itemObj)}
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            disabled={!(itemObj.name && itemObj.description && itemObj.quantity)}
          >
            {!(item.name && item.description && item.quantity)? 'Add Task':'Save Item'}
          </button>
        </div>
      </div>
    </>
  )
}

export default ItemForm
