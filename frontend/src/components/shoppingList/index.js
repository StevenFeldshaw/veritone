import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Drawer from '@mui/material/Drawer'
import SkipNextIcon from '@mui/icons-material/SkipNext'

import EmptyCard from '../emptyCard'
import ItemForm from '../ItemForm'
import ListItem from '../listItem'
import {
  createItem,
  deleteItem,
  getItems,
  updateItem, 
} from '../../utils/requests'

const ShoppingList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const items = await getItems()
      setData(items.response)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  const addItem = async item => {
    await createItem(item)
    setOpenDrawer(false)
    fetchData()
  }

  const handleUpdate = async item => {
    await updateItem(item)
    setOpenDrawer(false)
    fetchData()
  }

  const handleDelete = async id => {
    await deleteItem(id)
    fetchData()
  }

  if (loading)
    return (
      <div className='flex justify-center items-center h-[40vh]'>
        <CircularProgress size={70} />
      </div>
    )

  return (
    <>
      <Drawer
        anchor='right'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className='flex justify-between items-center w-[600px] h-[70px] bg-[#e5e5e5] px-8'>
          <h1 className='font-bold text-lg text-gray-600'>SHIPPING LIST</h1>
          <button onClick={() => setOpenDrawer(false)}>
            <SkipNextIcon className='text-gray-500 cursor-pointer' />
          </button>
        </div>
        <ItemForm actionHandler={addItem} cancelHandler={() => setOpenDrawer(false)}/>
      </Drawer>
      {data?.length > 0 ? (
        <>
          <div className='w-full h-full font-bold flex justify-center flex-col items-center gap-4 mt-3'>
            <div className='flex justify-between w-[80%] items-end font-sans mt-4 h-20'>
              <p className='text-[20px] font-normal'>Your Items</p>
              <button
                onClick={() => setOpenDrawer(true)}
                className='bg-[#1871e8] font-normal text-white h-10 px-4 rounded-md'
              >
                Add item
              </button>
            </div>
            {data.map(item => (
              <ListItem
                key={item.id}
                item={item}
                editHandler={handleUpdate}
                deleteHandler={handleDelete}
              />
            ))}
          </div>
        </>
      ) : <EmptyCard handler={() => setOpenDrawer(true)} />}
    </>
  )
}

export default ShoppingList
