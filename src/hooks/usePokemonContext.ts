import { useContext } from 'react'
import PokemonContext from '../contexts/PokemonContext'

export const usePokemonContext = () => {
  const context = useContext(PokemonContext)
  if (context === undefined) {
    throw new Error('usePokemonContext must be within PokemonProvider')
  }

  return context
}
