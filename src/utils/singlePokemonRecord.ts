import { NamedAPIResourceList } from '../types/Common'
import { Pokemon } from '../types/Pokemon'

const singlePokemonRecord = (pokemon: Pokemon): NamedAPIResourceList => {
  return {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        name: pokemon.name,
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
      },
    ],
  }
}

export default singlePokemonRecord
