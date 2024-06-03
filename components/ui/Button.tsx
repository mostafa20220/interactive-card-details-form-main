import { Button as MuiButton, SxProps } from '@mui/material'
import React from 'react'

export default function Button({children, sx}: {children: React.ReactNode, sx?: SxProps}) {
  return (
    <MuiButton
        variant="contained"
        sx={{
          backgroundColor: "gray.darkest",
          borderRadius: 2,
          height: "3rem",
          textTransform: "capitalize",
          ...sx
        }}
        fullWidth
      >
        {children}
      </MuiButton>
  )
}
