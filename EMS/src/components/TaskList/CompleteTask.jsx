import React from 'react'

const CompleteTask = ({data}) => {
  return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-cyan-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-green-600 py-1 px-2 text-sm rounded'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask