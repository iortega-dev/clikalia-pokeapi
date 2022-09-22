import React, { useEffect, useState } from 'react'
import { Typography, TextField, Container, Button, Grid } from '@mui/material'

import loadingPokeball from '../../assets/img/pokeball-loading.gif'

import PokemonTable from '../../components/PokemonTable'
import DittoMessage from '../../components/DittoMessage'

import { Status } from '../../api/pokeAPI'

import { useDebounce } from '../../hooks/useDebounce'
import { usePokemonContext } from '../../hooks/usePokemonContext'

const Home = () => {
  const { pokemonResponse, status, fetchPokemons, searchPokemon } =
    usePokemonContext()

  const [searchTerm, setSearchTerm] = useState<string>('')
  const debouncedSearchTerm: string = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchPokemon(debouncedSearchTerm)
    } else {
      fetchPokemons()
    }
  }, [debouncedSearchTerm])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleResetSearch = () => {
    setSearchTerm('')
  }

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
            <TextField
              fullWidth
              placeholder="Inserte pokemon a buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item container xs={3}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleResetSearch}
              disabled={searchTerm === ''}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md">
        {status === Status.LOADING && (
          <Grid container item alignItems="center" justifyContent="center">
            <img src={loadingPokeball} />
          </Grid>
        )}

        {status === Status.SUCCESS && pokemonResponse?.results.length && (
          <PokemonTable pokemons={pokemonResponse?.results} />
        )}

        {status === Status.ERROR && (
          <DittoMessage message="Lo siento, no he podido encontrar su pokemon :(" />
        )}
      </Container>
    </>
  )
}

export default Home
