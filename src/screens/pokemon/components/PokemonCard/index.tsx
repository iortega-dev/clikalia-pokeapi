import React from 'react'

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  ListItemText,
  List,
  ListItem,
} from '@mui/material'
import { Pokemon } from '../../../../types/Pokemon'

interface PokemonCardProps {
  data: Pokemon
}

const PokemonCard = ({ data }: PokemonCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} raised>
      <CardMedia
        component="img"
        alt={data.name}
        height="140"
        src={data.sprites.back_default as string}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.name.toUpperCase()}
        </Typography>
        <Typography variant="body2">
          <Typography variant="h5" color="text.secondary">
            Habilidades
          </Typography>
          <List>
            {data.abilities.map((ability) => {
              if (!ability.is_hidden) {
                return (
                  <ListItem key={ability.slot}>
                    <ListItemText
                      primary={`${ability.slot}. ${ability.ability.name}`}
                    />
                  </ListItem>
                )
              }
            })}
          </List>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PokemonCard
