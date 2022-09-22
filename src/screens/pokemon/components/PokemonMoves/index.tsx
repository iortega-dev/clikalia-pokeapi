import React, { useEffect, useState } from 'react'

import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { PokemonMove } from '../../../../types/Pokemon'

interface PokemonMovesProps {
  moves: PokemonMove[]
}

const PokemonMoves = ({ moves }: PokemonMovesProps) => {
  const [movesState, setMovesState] = useState<PokemonMove[]>([])

  useEffect(() => {
    setMovesState(moves.sort((a, b) => (a.move.url > b.move.url ? 1 : -1)))
  }, [])

  const deleteMove = (index: number) => {
    const moveToDelete = [movesState[index]]
    setMovesState([
      ...movesState.filter((move) => !moveToDelete.includes(move)),
    ])
  }

  return (
    <Card sx={{ padding: 4 }} raised>
      <Typography variant="h5" color="text.secondary" mb={2}>
        Movimientos
      </Typography>

      {movesState && !movesState.length && (
        <Typography variant="h6" color="text.secondary">
          No se han encontrado movimientos para este Pokemon :(
        </Typography>
      )}

      {movesState && !!movesState.length && (
        <List>
          {movesState.map((movement, index) => {
            return (
              <ListItem
                key={movement.move.name}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteMove(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={movement.move.name} />
              </ListItem>
            )
          })}
        </List>
      )}
    </Card>
  )
}

export default PokemonMoves
