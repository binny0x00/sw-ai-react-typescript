import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const buttonClassName = ['button', `button-${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  )
}
