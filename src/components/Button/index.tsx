import cn from 'clsx'
import React from 'react'
import _isUndefined from 'lodash/isUndefined'

import {
  ButtonType,
  ButtonSize,
  ButtonVariant,
  type ButtonProps
} from './types'

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { type, label, className, onClick, variant, size, children } = props
  const isBig = size === ButtonSize.Big
  const isSmall = size === ButtonSize.Small
  const isOutline = variant === ButtonVariant.Outline
  const isNormal = size === ButtonSize.Normal || _isUndefined(size)

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        className,
        'font-bold rounded-md hover:rounded-lg hover:cursor-pointer',
        {
          'text-lg px-6 py-10': isBig,
          'text-sm px-2 py-4': isSmall,
          'text-base px-4 py-8': isNormal,
          'bg-[color:var(--primary-color)] text-white': !isOutline,
          'border-solid border-[color:var(--primary-color)]': isOutline,
          'border bg-transparent text-[color:var(--primary-color)]': isOutline
        }
      )}
    >
      {label ?? children}
    </button>
  )
}

export default Button
export { ButtonType, ButtonSize, ButtonVariant, Button }
