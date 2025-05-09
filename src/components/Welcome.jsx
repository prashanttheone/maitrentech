import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (

    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div>
      <h1 className='text-9xl font text-center mb-8'>Welcome to  Food's Kitchen</h1>
      <div className='flex justify-center'>
         <button
            type="submit"
            className="w-auto p-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mb-4"
          >
            <Link link to='/menu'> GO TO MENU</Link>
           
          </button>
      </div>
      </div>  
    </div>
  )
}

export default Welcome