import React from 'react'
import { useParams } from 'react-router-dom'

import { Grid } from '@mui/material'

import DittoMessage from '../../components/DittoMessage'
import { useSinglePokemon } from '../../hooks/useSinglePokemon'
import PokemonCard from './components/PokemonCard'
import PokemonMoves from './components/PokemonMoves'

const Pokemon = () => {
  const { id } = useParams<{ id?: string }>()

  if (!id) {
    return <DittoMessage message="Es necesario un ID del pokemon" />
  }

  const { pokemonData } = useSinglePokemon(id)

  if (!pokemonData) {
    return (
      <DittoMessage message="Lo sentimos, no existen datos para este pokemon" />
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <PokemonCard data={pokemonData} />
      </Grid>
      <Grid item xs={8}>
        <PokemonMoves moves={pokemonData.moves} />
      </Grid>
    </Grid>
  )
}

export default Pokemon
