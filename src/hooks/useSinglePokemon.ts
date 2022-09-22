import { useState, useEffect } from 'react'
import pokeAPI, { Status } from '../api/pokeAPI'
import { Pokemon } from '../types/Pokemon'

export const useSinglePokemon = (pokemonId: string) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>()
  const [status, setStatus] = useState(Status.INITIAL)

  useEffect(() => {
    const fetchPokemon = async (pokemonId: string) => {
      try {
        const response = await pokeAPI.get<Pokemon>(`pokemon/${pokemonId}`)
        setPokemonData(response.data)
        setStatus(Status.SUCCESS)
      } catch (error) {
        setStatus(Status.ERROR)
      }
    }

    fetchPokemon(pokemonId)
  }, [])

  return { pokemonData, status }
}
