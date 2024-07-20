import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
   
  const {name} = useParams();
  const navigate = useNavigate()

  const GoBackhandler =() =>{
    navigate("/user");
x  };
 


  return (
    
        <div className=' w-1/2 m-auto mt-10'>
    <h1 className='text-red-200 text-5xl mb-2 '>UserDetails</h1>

  <h1 className='text-2xl mt-3 '>hii!,{name}</h1>



      <button onClick={GoBackhandler} className='mt-5 text-white px-3 py-2 bg-red-300'>
        GO BACK
        </button>
  </div>
  
  )
}

export default UserDetail
