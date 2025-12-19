import React from 'react'
import { Link } from 'react-router-dom'

const RightCardContent = (props) => {

    const destination = props.ca?.props?.to || props.car || props.ca || '#'
    const isExternal = typeof destination === 'string' && /^(https?:)\/\//.test(destination)

    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'></p>
                <div className='flex justify-between'>
                    {isExternal ? (
                        <a href={destination} style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>
                            {props.tag}
                        </a>
                    ) : (
                        <Link to={destination} style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>
                            {props.tag}
                        </Link>
                    )}

                    <button className='text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent