// import React from 'react'
// import Lefttext from './LeftContent'
// import Righttext from './RightContent'

// const Page1context=(props)=> {
   
//   return (
//     <div className='flex item-center justify-between gap-10 py-3 h-[90vh]  px-18 '>
      

//  <Lefttext/>
//  <Righttext  users={props.users}/>
//     </div>
   
//   )
// }

// export default Page1context


import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
        <LeftContent />
        <RightContent users={props.users}  />
    </div>
  )
}

export default Page1Content