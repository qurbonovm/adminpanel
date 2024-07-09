import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import City from './City'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/city' element={<City/>}/>
      </Routes>
    </div>
  )
}

export default App