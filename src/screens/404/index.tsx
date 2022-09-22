import React from 'react'
import { Grid, Typography } from '@mui/material'

import DittoMessage from '../../components/DittoMessage'

const NotFound = () => {
  return (
    <Grid container>
      <Grid item container justifyContent="center">
        <Typography variant="h1">404</Typography>
      </Grid>
      <Grid item container>
        <DittoMessage message="¡Ups, no deberías haber visto esto!" />
      </Grid>
    </Grid>
  )
}

export default NotFound
