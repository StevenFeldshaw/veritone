import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const DialogueBox = ({ title, message, actionTitle, actionHandler, closeHandler, show }) => (
  <Dialog open={show} onClose={closeHandler}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <div className='flex space-x-4 p-5 justify-end'>
        <button
          onClick={closeHandler}
          className=' text-black py-2 px-6 rounded hover:bg-gray-300'
        >
          Cancel
        </button>
        <button
          onClick={actionHandler}
          className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600'
        >
          {actionTitle}
        </button>
      </div>
    </DialogActions>
  </Dialog>
)

export default DialogueBox
