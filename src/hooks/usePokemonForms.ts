import { useEffect, useState } from 'react'

import pokeAPI, { Status } from '../api/pokeAPI'

import { NamedAPIResource } from '../types/Common'
import { PokemonForm } from '../types/Pokemon'

const usePokemonForms = (formsData: NamedAPIResource[]) => {
  const [status, setStatus] = useState(Status.INITIAL)
  const [pokemonForms, setPokemonForms] = useState<PokemonForm[]>([])

  useEffect(() => {
    const getPokemonForms = async () => {
      setStatus(Status.LOADING)
      const formURLs = formsData.map((fd) => fd.url)
      const requestArray = formURLs.map((url: string) =>
        pokeAPI.get<PokemonForm>(url)
      )

      await Promise.allSettled(requestArray)
        .then((requestResults) =>
          requestResults.forEach((result) => {
            if (result.status === 'fulfilled') {
              const { value } = result
              setPokemonForms([...pokemonForms, { ...value.data }])
            }
          })
        )
        .then(() => {
          setStatus(Status.SUCCESS)
        })
        .catch(() => {
          setStatus(Status.ERROR)
        })
    }

    getPokemonForms()
  }, [])

  return { pokemonForms, status }
}

export default usePokemonForms
