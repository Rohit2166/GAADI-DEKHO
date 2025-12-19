// import React from 'react'
// import Rightcard from './Rightcard';

// function Righttext(props) {
//     console.log(props);
//   return (
//     <div className='h-full flex overflow-x-auto flex-nowrap rounded-4xl gap-10 w-2/3 p-6 '>
       
//    {props.users.map(function(){
//     return <Rightcard img={elem.img}  tag={elem.tag}/>
//    })}
       
    
//     </div>
//   )
// }

// export default Righttext


import React from 'react'

import RightCard from './Rightcard';

const RightContent = (props) => {
  console.log(props.users.color);
  
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {props.users.map(function(elem,idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}  car={elem.car}/>
        })}
    </div>
  )
}

export default RightContent