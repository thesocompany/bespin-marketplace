import React from 'react'
import classnames from 'classnames'

// These props we want to require always, even on custom components
// type StyledLinkProps<T> = {
//   variant?: 'external' | 'unstyled'
//   className?: string
//   children: React.ReactNode
// } & T

// These props are only required on the default Link
// interface WithDefaultLinkProps {
//   href: string
// }

// Add `asCustom` to the provided custom props
// interface WithCustomLinkProps<T> {
//   asCustom: React.FunctionComponent<T>
// }

// Default props means allow the StyledLinkProps as well as any
// props allowed on the `a` element, plus the required props on
// WithDefaultLinkProps
// export type DefaultLinkProps = StyledLinkProps<JSX.IntrinsicElements['a']> &
//   WithDefaultLinkProps

// Custom props means allow the StyledLinkProps as well as the custom
// props, plus the required props on WithCustomLinkProps
// export type CustomLinkProps<T> = StyledLinkProps<T> & WithCustomLinkProps<T>

function linkClasses() {
  const unstyled = variant === 'unstyled'
  const isExternalLink = variant === 'external'

  return unstyled
    ? className
    : classnames(
        'usa-link',
        {
          'usa-link--external': isExternalLink,
        },
        className
      )
}

export function Link(props) {
  if ('asCustom' in props) {
    const { variant, className, asCustom, children, ...remainingProps } = props
    // 1. We know props is AsCustomProps<FCProps>
    // 2. We know AsCustomProps<FCProps> is
    //    FCProps & { variant: ..., className: ..., children: ..., asCustom: ... }
    // 3. Therefore we know that removing those props leaves us
    //    with FCProps
    //
    // const linkProps: FCProps = (remainingProps as unknown) as FCProps
    // const classes = linkClasses(variant, className)
    return React.createElement(
      asCustom,
      {
        className: classes,
        ...linkProps,
      },
      children
    )
  } else {
    const { children, className, variant, ...linkProps } = props

    const classes = linkClasses(variant, className)
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    )
  }
}

export default Link