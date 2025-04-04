import React from 'react'
import classnames from 'classnames'

// interface ButtonProps {
//   type: 'button' | 'submit' | 'reset'
//   children: React.ReactNode
//   secondary?: boolean
//   base?: boolean
//   accent?: boolean
//   outline?: boolean
//   inverse?: boolean
//   size?: 'big' | 'small' // small is deprecated
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   big?: boolean
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   small?: boolean
//   /**
//    * @deprecated since 1.9.0
//    */
//   icon?: boolean
//   unstyled?: boolean
// }

export const Button = (props) => {
  const {
    type,
    children,
    secondary,
    base,
    accent,
    outline,
    inverse,
    size,
    big,
    small,
    icon,
    unstyled,
    onClick,
    className,
    ...defaultProps
  } = props

  if (big) {
    console.log('Button property big is deprecated.  Use size')
  }

  if (icon) {
    console.log('Button property icon is deprecated.')
  }

  const isBig = size ? size === 'big' : big
  const isSmall = size ? size === 'small' : small

  if (isSmall) {
    console.log(
      'Small button is deprecated. Use the default, pass in a custom className, or use size big.'
    )
  }

  const classes = classnames(
    'usa-button',
    {
      'usa-button--secondary': secondary,
      'usa-button--base': base,
      'usa-button--accent-cool': accent,
      'usa-button--outline': outline,
      'usa-button--inverse': inverse,
      'usa-button--big': isBig,
      'usa-button--small': isSmall,
      'usa-button--icon': icon,
      'usa-button--unstyled': unstyled,
    },
    className
  )

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      data-testid="button"
      {...defaultProps}>
      {children}
    </button>
  )
}

export default Button