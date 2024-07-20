import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import User from '../components/User'
import UserDetail from '../components/UserDetail'

const Routing = () => {
  return (
    <>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/user' element ={<User/>}/>
      <Route path='/user/:name' element ={<UserDetail/>}/>
      <Route path='/about' element ={<About/>}/>

   </Routes>
    </>

  )
}

export default Routing
