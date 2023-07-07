import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { Home } from '../pages/Home'
import { PrivateRoutes } from './PrivateRoutes'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
