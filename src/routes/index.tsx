import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../screens/home'
import Pokemon from '../screens/pokemon'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  )
}

export default Router
