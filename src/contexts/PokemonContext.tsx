import React, { useState, useEffect, createContext, ReactNode } from 'react'

import pokeAPI, { Status } from '../api/pokeAPI'
import { NamedAPIResourceList } from '../types/Common'
import { Pokemon } from '../types/Pokemon'
import singlePokemonRecord from '../utils/singlePokemonRecord'

interface IPokemonContext {
  pokemonResponse?: NamedAPIResourceList
  status: Status
  fetchPokemons: () => Promise<void>
  searchPokemon: (searchTerm?: string) => Promise<void>
}

interface PokemonProviderProps {
  children: ReactNode
}

const PokemonContext = createContext<IPokemonContext | undefined>(undefined)

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

      response.data.results.sort((a, b) => (a.name > b.name ? 1 : -1))

      setPokemonResponse(response.data)
      setStatus(Status.SUCCESS)
    } catch (error) {
      setStatus(Status.ERROR)
    }
  }

  const searchPokemon = async (searchTerm = '') => {
    setStatus(Status.LOADING)
    try {
      const response = await pokeAPI.get<Pokemon>(`pokemon/${searchTerm}`)

      setPokemonResponse(singlePokemonRecord(response.data))

      setStatus(Status.SUCCESS)
    } catch (error) {
      setStatus(Status.ERROR)
    }
  }

  return (
    <PokemonContext.Provider
      value={{ pokemonResponse, status, fetchPokemons, searchPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
