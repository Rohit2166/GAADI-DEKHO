// import React from 'react'

// function Navbar() {
//   return (
//     <div className='flex justify-between items-center px-16 py-6 bg-gray-200'>
//       <h4 className='bg-black text-white uppercase px-6 px-2 rounded-full '>Target Audience</h4>
//       <button className='border-2 bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'> Digital platform</button>
//     </div>
//   )
// }

// export default Navbar


import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full'>Gaadi Dekho</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'> <a href="https://www.cardekho.com/">Cars Platform</a></button>
    </div>
  )
}

export default Navbar