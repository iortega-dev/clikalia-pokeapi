import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import { NamedAPIResource } from '../../types/Common'

interface PokemonTableProps {
  pokemons: NamedAPIResource[]
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nombre',
    editable: false,
    flex: 1,
  },
  {
    field: 'url',
    headerName: 'URL',
    editable: false,
    flex: 1,
  },
]

const PokemonTable = ({ pokemons }: PokemonTableProps) => {
  const navigate = useNavigate()

  const rows = pokemons.map((pokemon) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
    }
  })

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    const splittedUrl = params.row.url.split('/')
    navigate(`/pokemon/${splittedUrl[splittedUrl.length - 2]}`)
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        getRowId={(row) => row.name}
        disableSelectionOnClick
        onRowClick={handleRowClick}
      />
    </Box>
  )
}

export default PokemonTable
