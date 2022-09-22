import React, { useState, useEffect, createContext, ReactNode } from 'react'

import pokeAPI, { Status } from '../api/pokeAPI'
import { NamedAPIResourceList } from '../types/Common'

interface IPokemonContext {
  pokemonResponse?: NamedAPIResourceList
  status: Status
}

interface PokemonProviderProps {
  children: ReactNode
}

const defaultState = {
  status: Status.INITIAL,
}

const PokemonContext = createContext<IPokemonContext>(defaultState)

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonResponse, setPokemonResponse] = useState<NamedAPIResourceList>()
  const [status, setStatus] = useState(Status.INITIAL)

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    setStatus(Status.LOADING)
    try {
      const response = await pokeAPI.get<NamedAPIResourceList>(
        'pokemon?limit=100000&offset=0'
      )
      setPokemonResponse(response.data)
      setStatus(Status.SUCCESS)
    } catch (error) {
      setStatus(Status.ERROR)
    }
  }

  return (
    <PokemonContext.Provider value={{ pokemonResponse, status }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
