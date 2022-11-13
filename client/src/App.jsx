import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import React from 'react'
import Hero from './pages/Hero'
import Register from './pages/Register'
import Home from './pages/Home';
import CurrentProject from './pages/CurrentProject';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/project/:id' element={<CurrentProject/>}/>
        {/* 
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/game/:status' element={<Game/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}
