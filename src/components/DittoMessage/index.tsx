import React from 'react'

import dittoSad from '../../assets/img/ditto.png'

import { Grid, Typography } from '@mui/material'

interface DittoMessageProps {
  message: string
}

const DittoMessage = ({ message }: DittoMessageProps) => {
  return (
    <Grid container item alignItems="center" justifyContent="center">
      <Typography>{message}</Typography>
      <img src={dittoSad} />
    </Grid>
  )
}

export default DittoMessage
