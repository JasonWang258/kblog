import React from 'react'
import { Typography } from '@material-ui/core'
import MuiLink from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://e.lestores.com/">
        lestores.com
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
