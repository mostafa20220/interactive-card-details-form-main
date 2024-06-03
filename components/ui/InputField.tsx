import { FormGroup, InputLabel, TextField } from '@mui/material'
import React from 'react'


type Props = {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

export default function InputField({label, placeholder, type, value, onChange, width="100%"}:Props) {
  return (
    <FormGroup sx={{ width }}>
    <InputLabel

      sx={{
        fontSize: "0.6rem",
        fontWeight: 800,
        letterSpacing: 1,
        mb: "0.2rem",
      }}
    >
      {label}
    </InputLabel>
    <TextField
      sx={{
        ".MuiInputBase-input": { px: 2, py: 1 },
        ".MuiInputBase-root": { borderRadius: "10px" },
      }}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </FormGroup>

  )
}
