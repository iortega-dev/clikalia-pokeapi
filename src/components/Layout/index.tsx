import React from 'react'

import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import Router from '../../routes'

const Layout = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Clikalia PokeAPI
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Router />
        </Container>
      </main>
    </>
  )
}

export default Layout
