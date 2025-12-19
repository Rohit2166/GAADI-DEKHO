// import React from 'react'

// function Lefttext() {
//   return (
//     <div className='h-full flex flex-col justify-between w-1/3   '>
      
//     <div className='p-5'>
//         <h3 className='mb-7 text-6xl font-bold leading-1.1'>Prospective <br/>  <span>Customer</span> <br/> Satisfaction</h3>

//        <p className='text-xl font-medium text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, non dolores autem delectus sint quibusdam ad officiis inventore nesciunt molestias.</p>

//     </div>

//     <div className='text-8xl'></div>
        
//         </div>
//   )
// }

// export default Lefttext


import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 '>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent