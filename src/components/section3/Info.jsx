import React from 'react'
import { Link } from 'react-router-dom'

const Info = (props) => {

   

  return (
    <div>
        
      <div className='h-80 w-80 bg-transparent shadow-lg rounded-[4vh] flex flex-col justify-between items-center py-4 gap-4 shadow-gray-400 pointer-events-auto'>
            <div className='h-50 w-50 bg-gray-300 rounded-[2vh] flex justify-center items-center overflow-hidden'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
            </div>
            <div className='h-25 w-50 text-lg bg-stone-50 rounded-[4vh] flex justify-center items-center font-bold font-mono'> {props.company} </div>
            <div className='h-20 w-30 bg-gray-200 rounded-[7vh] flex justify-center items-center font-serif relative pointer-events-auto'>
              {props.url ? (
                (/^(https?:)\/\//.test(props.url)) ? (
                  <a href={props.url} className='bg-black text-white px-4 py-2 rounded-full inline-block relative z-20 pointer-events-auto'>Try it</a>
                ) : (
                  <Link to={props.url} className='bg-black text-white px-4 py-2 rounded-full inline-block relative z-20 pointer-events-auto'>Try it</Link>
                )
              ) : (
                <button className='bg-gray-400 text-white px-4 py-2 rounded-full cursor-not-allowed inline-block relative z-20'>Try it</button>
              )}
            </div>
       
        </div>
    </div>
  )
}

export default Info
