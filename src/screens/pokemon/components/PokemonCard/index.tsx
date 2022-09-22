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
    <Card raised>
      <CardMedia
        component="img"
        alt={data.name}
        height="200"
        sx={{ objectFit: 'contain' }}
        src={
          data.sprites.back_default
            ? (data.sprites.back_default as string)
            : (data.sprites.front_default as string)
        }
      />
      <CardContent sx={{ padding: 4 }}>
        <Typography gutterBottom>{data.name.toUpperCase()}</Typography>
        <Typography variant="h6" color="text.secondary">
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
      </CardContent>
    </Card>
  )
}

export default PokemonCard
