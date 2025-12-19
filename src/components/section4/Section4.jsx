import React from 'react'
import Thank from './Thank'
import Form from './Form'
import Footer from './Footer'

const Section4 = () => {
  return (
    <div>
      <div className='h-screen w-full bg-pink-50 flex justify-between items-center gap-20 px-20 py-10'>
        
       <Thank/>
        <Form/>
        


      </div>
      <Footer/>
    </div>
  )
}

export default Section4
