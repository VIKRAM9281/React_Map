import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Subcomponents/Navbar'

const Home = () => {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Navbar/>} />
       </Routes>
      <h4>Home</h4>
    </div>
  )
}

export default Home
