import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import Drawer from '@mui/material/Drawer'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import SkipNextIcon from '@mui/icons-material/SkipNext'

import ItemForm from '../ItemForm'
import DialogueBox from '../dialogueBox'


const ListItem = ({
  item,
  editHandler,
  deleteHandler,
}) => {
  const [showDialogue, setShowDialogue] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const closeDrawer = () => {
    setOpenSide(false)
  }

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  const handleDeleteConfirm = async () => {
    try {
      setShowDialogue(false)
      deleteHandler(item.id)
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const EditHandler = item => {
    toggleDrawer(false)
    editHandler(item)
  }

  const [openSide, setOpenSide] = useState(false)

  const toggleDrawer = (openSide) => {
    setOpenSide(openSide)
  }

  return (
    <>
      <Drawer
        anchor='right'
        open={openSide}
        onClose={() => toggleDrawer(false)}
      >
        <div className='flex justify-between items-center w-[600px] h-[70px] bg-[#e5e5e5] px-8'>
          <h1 className='font-bold text-lg text-gray-600'>SHIPPING LIST</h1>
          <button onClick={closeDrawer}>
            <SkipNextIcon className='text-gray-500 cursor-pointer' />
          </button>
        </div>
        <ItemForm
          item={item}
          actionHandler={EditHandler}
          cancelHandler={() => toggleDrawer(false)}
        />
      </Drawer>

      <div
        className={`flex w-[80%] justify-between font-sans px-8 h-20 border border-[#D3D3D3] ${isChecked && 'bg-[#f8fafb]'}`}
      >
        <div className='flex items-center space-x-4'>
          <Checkbox
            checked={isChecked}
            onChange={handleToggle}
            color='primary'
          />
          <div className='flex-col items-center'>
            <p className={`font-normal ${isChecked && 'text-[#8eafd1] line-through'}`}>
              {item.name}
            </p>
            <p className={`text-[#969393] font-light text-[14px] ${isChecked && 'line-through'}`}>
              {item.description}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <EditOutlinedIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => toggleDrawer(true)}
          />
          <DeleteOutlinedIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => setShowDialogue(true)}
          />
        </div>
        {showDialogue && <DialogueBox
          title='Delete Item?'
          message='Are you sure you want to delete this item? This can not be undone.'
          actionTitle='Delete'
          actionHandler={handleDeleteConfirm}
          closeHandler={() => setShowDialogue(false)}
          show={showDialogue}
        />}
      </div>
    </>
  )
}

export default ListItem
