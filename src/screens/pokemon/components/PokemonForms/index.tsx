import React from 'react'
import { Card, Typography } from '@mui/material'

import { NamedAPIResource } from '../../../../types/Common'
import usePokemonForms from '../../../../hooks/usePokemonForms'
import { Status } from '../../../../api/pokeAPI'
import PokemonFormTable from '../../../../components/PokemonFormTable'

interface PokemonFormsProps {
  forms: NamedAPIResource[]
}

const PokemonForms = ({ forms }: PokemonFormsProps) => {
  const { pokemonForms, status } = usePokemonForms(forms)

  return (
    <Card sx={{ padding: 4 }} raised>
      <Typography variant="h6" color="text.secondary" mb={2}>
        Formas
      </Typography>
      {pokemonForms && !!pokemonForms.length && status === Status.SUCCESS && (
        <PokemonFormTable forms={pokemonForms} />
      )}
    </Card>
  )
}

export default PokemonForms
