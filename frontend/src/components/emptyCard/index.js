const EmptyCard = ({handler}) => (
  <div className='w-full h-screen flex justify-center items-center'>
    <div className='w-[600px] h-[300px] p-4 border-2 text-center'>
      <p className='text-[19px] text-[#959494] mb-5 mt-20'>
        Your shopping list is empty :(
      </p>
      <button 
        className='bg-[#1871e8] text-white py-2 px-4 rounded-[10px]'
        onClick={handler}
      >
        Add your first item
      </button>
    </div>
  </div>
)

export default EmptyCard