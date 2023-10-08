import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-6xl'>Courses List</h1> 
      <ul className='list-none mt-10 ml-10'>
        <li className='hover:text-blue-400 hover:text-2xl gap-5 cursor-pointer'>WMA</li>
        <li className='hover:text-blue-400 hover:text-2xl gap-5 cursor-pointer'>PY-Programming</li>
        <li className='hover:text-blue-400 hover:text-2xl gap-5 cursor-pointer'>AI-Chat boat</li>
        <li className='hover:text-blue-400 hover:text-2xl gap-5 cursor-pointer'>Graphic Designing</li>
        <li className='hover:text-blue-400 hover:text-2xl gap-5 cursor-pointer'>CCNA</li>
      </ul>
    </div>
  )
}

export default page
