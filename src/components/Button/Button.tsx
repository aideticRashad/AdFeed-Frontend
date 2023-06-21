import React from 'react'
import { ButtonProps } from '../../types/typesDef'
import { Button } from '@mui/material'

const CustomButton = ({ variant, style, className, fullWidth, title, onClick }: ButtonProps) => {
  return (
    <div>
      <Button variant={variant} sx={{
        ...style, '&:hover': { ...style },
      }} fullWidth={fullWidth} onClick={onClick}>{title}</Button>
    </div>
  )
}

export default CustomButton
