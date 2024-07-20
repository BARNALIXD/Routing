import React from 'react'

const User = () => {
  return (
    <div className=' w-1/2 m-auto mt-10'>
    <h1 className='text-red-200 text-5xl mb-2 '>User</h1>
    
    <div className='flex w-1/2 flex-col mt-5'>
      <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Chingu">
      Chingu
      </Link>
      <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Mingu">
      Mingu
      </Link>
      <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Tingu">
       Tingu
      </Link>

    </div>
    
  </div>
  )
}

export default User
