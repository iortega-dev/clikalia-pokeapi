import React from 'react'
import { Box } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
} from '@mui/x-data-grid'

import { PokemonForm } from '../../types/Pokemon'

interface PokemonFormTableProps {
  forms: PokemonForm[]
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    editable: false,
    flex: 1,
  },
  {
    field: 'name',
    headerName: 'Nombre',
    editable: false,
    flex: 1,
  },
  {
    field: 'battleOnly',
    headerName: 'Battle.O',
    editable: false,
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<boolean>) => {
      return params.value === true ? 'Si' : 'No'
    },
  },
]

const PokemonFormTable = ({ forms }: PokemonFormTableProps) => {
  const rows = forms.map((form) => {
    return {
      id: form.id,
      name: form.name,
      battleOnly: form.is_battle_only,
    }
  })

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        getRowId={(row) => row.id}
        disableSelectionOnClick
      />
    </Box>
  )
}

export default PokemonFormTable
