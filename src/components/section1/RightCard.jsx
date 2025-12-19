// import React from 'react'
// import Rightcardcontent from './Rightcardcontent'

// const Rightcard=(props)=> {
//   return (
//     <div className=' shrink-0 h-full p-4 w-80  rounded-4xl overflow-hidden relative'>
//         <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D" alt="" />

//         <img  className='h-full w-full object-cover'src={props.img} alt="" />
//      <Rightcardcontent tag={props.tag}/>
//     </div>
//   )
// }

// export default RightCard


import RightCardContent from './Rightcardcontent'

const RightCard = (props) => {
    console.log(props.color);
    
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            
            <RightCardContent color={props.color} id={props.id} tag={props.tag} ca={props.car} />
            
            
        </div>
    )
}

export default RightCard