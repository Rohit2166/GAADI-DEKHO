import React from 'react'
import Info from './Info'

const Section = (props) => {
  return (
    <div>
      <div className='h-screen w-full bg-white py-10 px-6'>
        <div
          className='h-full w-full bg-transparent grid grid-flow-col grid-rows-2 gap-6 overflow-x-auto overflow-y-hidden'
          style={{ gridAutoColumns: 'minmax(320px, 1fr)' }}>
            {props.details && props.details.map(function(elem){

          return <Info  img={elem.img} company={elem.company}  url={elem.url}/>
        })}

          
          

        </div>
      </div>
    </div>
  )
}

export default Section
