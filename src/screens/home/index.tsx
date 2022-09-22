import React, { useContext } from 'react'
import { Typography, TextField, Container, Button, Grid } from '@mui/material'

import loadingPokeball from '../../assets/img/pokeball-loading.gif'

import PokemonContext from '../../contexts/PokemonContext'

import PokemonTable from '../../components/PokemonTable'

import { Status } from '../../api/pokeAPI'
import DittoMessage from '../../components/DittoMessage'

const Home = () => {
  const { pokemonResponse, status } = useContext(PokemonContext)

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Pokemons
      </Typography>
      <Container maxWidth="sm">
        <Grid container columnSpacing={2} mb={4}>
          <Grid item xs>
            <TextField fullWidth placeholder="Inserte pokemon a buscar..." />
          </Grid>
          <Grid item container xs={3}>
            <Button fullWidth variant="contained" size="large">
              Reset
            </Button>
          </Grid>
        </Grid>

        {status === Status.LOADING && (
          <Grid container item alignItems="center" justifyContent="center">
            <img src={loadingPokeball} />
          </Grid>
        )}

        {status === Status.SUCCESS && pokemonResponse?.results.length && (
          <PokemonTable pokemons={pokemonResponse?.results} />
        )}

        {status === Status.ERROR && (
          <DittoMessage message="Lo sentimos, ha ocurrido un error al cargar sus Pokemons :(" />
        )}
      </Container>
    </>
  )
}

export default Home
