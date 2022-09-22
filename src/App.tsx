import React from 'react'
import Layout from './components/Layout'
import { PokemonProvider } from './contexts/PokemonContext'

function App() {
  return (
    <PokemonProvider>
      <Layout />
    </PokemonProvider>
  )
}

export default App
