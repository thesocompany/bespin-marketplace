import React from 'react'
import classnames from 'classnames'

// import { NavCloseButton } from '../NavCloseButton/NavCloseButton'
import { NavList } from './NavList'

// type PrimaryNavProps = {
//   items: React.ReactNode[],
//   onToggleMobileNav?: (
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => void,
//   mobileExpanded?: boolean,
// }

export const PrimaryNav = (props
) => {
  const {
    items,
    onToggleMobileNav,
    mobileExpanded,
    children,
    className,
    ...navProps
  } = props

  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <nav className={classes} {...navProps}>
      {/* <NavCloseButton onClick={onToggleMobileNav} /> */}
      <NavList items={items} type="primary" />
      {children}
    </nav>
  )
}

export default PrimaryNav