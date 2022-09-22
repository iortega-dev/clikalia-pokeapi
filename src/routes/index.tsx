import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../screens/404'

import Home from '../screens/home'
import Pokemon from '../screens/pokemon'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
