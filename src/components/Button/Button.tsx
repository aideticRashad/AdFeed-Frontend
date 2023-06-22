import React from 'react'
import { ButtonProps } from '../../types/typesDef'
import { Button } from '@mui/material'

const CustomButton = (props: ButtonProps) => {
  const { type, variant, style, className, fullWidth, title, onClick } = props;
  return (
    <div>
      <Button type={type} variant={variant} sx={{
        ...style, '&:hover': { ...style },
      }} fullWidth={fullWidth} onClick={onClick}>{title}</Button>
    </div>
  )
}

export default CustomButton
