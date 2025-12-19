import React, { useRef } from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'


const Slide = (props) => {
  const sliderRef = useRef(null)

  const images = [
    
    'https://images.unsplash.com/photo-1612723037707-71261fce5faa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1688365258885-dde46384285f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1646654184457-cd64cadcd3a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycyUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1741905358583-1999b08d6e2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1576448227483-464616eefd51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1695327813447-e78645cfa7af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1722307580588-c2eefbe74cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1688026238340-ef31356d320c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'
  ]

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-white gap-6'>
      <div className='w-full max-w-4xl p-6 relative'>
        <ImageSlider ref={sliderRef} images={images} autoPlay interval={3500} />
        <div className='flex justify-between mt-4 gap-4'>
          <button onClick={() => sliderRef.current?.prev()} className='bg-black text-white px-4 py-2 rounded-full'>Prev</button>
          <button onClick={() => sliderRef.current?.next()} className='bg-black text-white px-4 py-2 rounded-full'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Slide
