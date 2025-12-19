import React from 'react'

const Buttonleft = (props) => {
  return (
    
      <div >
        <div className='h-180 w-[100] bg-gray-100 flex justify-between gap-10 items-center  p-10 rounded-full text-white'>
        
         <div>
        <button className='bg-black text-white uppercase px-6  py-2 rounded-full h-1xl w-1xl bg-gray-500 border-3 border-black'>Back</button>
      </div>
      <div className='h-130 w-200 bg-red-400 rounded-[8vw] flex justify-center items-center overflow-hidden'>

      </div>

        <div>
        <button className='bg-black text-white uppercase px-6 py-2 rounded-full h-1xl w-1xl bg-gray-500 border-3 border-black'>Right</button>
      </div>

        </div>
      
    </div>
  )
}

export default Buttonleft
