import React from 'react'

export function Items({type = "input"}) {
    

    return (
        <>
            <div className='flex justify-between mb-2' >
                <p className='w-1/3 ml-4'>{type}</p>
                <p className=' max-w-28 '>22-04-2024</p>
                <button className=' bg-red-600 text-white font-bold py-1 px-2 rounded '>Delete</button>
            </div>
            
        </>
    )
}