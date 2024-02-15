import { type ReactNode } from 'react'

export enum ButtonVariant {
  Normal = 'normal',
  Outline = 'outline'
}

export enum ButtonSize {
  Big = 'big',
  Small = 'small',
  Normal = 'normal'
}

export enum ButtonType {
  Reset = 'reset',
  Button = 'button',
  Submit = 'submit'
}

export interface ButtonProps {
  label?: string
  type: ButtonType
  size?: ButtonSize
  className?: string
  children?: ReactNode
  onClick?: () => void
  variant?: ButtonVariant
}
