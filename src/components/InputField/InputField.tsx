import React from 'react';
import { FormControl, Input, InputLabel, OutlinedInput } from '@mui/material';

type InputFieldProps = {
  label: string,
  onChange: (value: any) => void,
  name: string,
  sx: object,
  fullWidth: boolean
}

const InputField = (props: InputFieldProps) => {
  const { label, onChange, name, sx, fullWidth } = props;
  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor="email">{label}</InputLabel>
      <OutlinedInput id={name} label={label} fullWidth={fullWidth} name='email' sx={sx} onChange={onChange} />
    </FormControl>
  )
}

export default InputField
