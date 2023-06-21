
export interface loginFormArgs {
  email : string,
  password: string
}

export interface ButtonProps {
  title: string,
  className?: string,
  variant?: "text" | "outlined" | "contained",
  style?: object,
  fullWidth?: boolean,
  onClick?: (e: any) => void
}

export type AuthLLayerArgs = {
  type: string,
  setType: React.Dispatch<React.SetStateAction<string>>
}


export interface ResetPasswordArgs {
  password: string,
  password1: string
}