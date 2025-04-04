import React from 'react'
import classnames from 'classnames'
// import { deprecationWarning } from '../../../deprecation'

// interface CustomNavListProps {
//   items: React.ReactNode[],
//   type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary',
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   primary?: boolean,
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   secondary?: boolean,
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   subnav?: boolean,
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   megamenu?: boolean,
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   footerSecondary?: boolean,
// }

// export type NavListProps = CustomNavListProps

export const NavList = (props) => {
  const {
    items,
    type,
    primary,
    secondary,
    subnav,
    megamenu,
    footerSecondary,
    className,
    ...ulProps
  } = props

  if (primary) {
    console.log('NavList property primary is deprecated.  Use type')
  }
  if (secondary) {
    console.log('NavList property secondary is deprecated.  Use type')
  }
  if (subnav) {
    console.log('NavList property subnav is deprecated.  Use type')
  }
  if (megamenu) {
    console.log('NavList property megamenu is deprecated.  Use type')
  }
  if (footerSecondary) {
    console.log(
      'NavList property footerSecondary is deprecated.  Use type'
    )
  }

  const isPrimary = type ? type === 'primary' : primary
  const isSecondary = type ? type === 'secondary' : secondary
  const isSubnav = type ? type === 'subnav' : subnav
  const isMegamenu = type ? type === 'megamenu' : megamenu
  const isFooterSecondary = type ? type === 'footerSecondary' : footerSecondary

  const ulClasses = classnames(
    {
      'usa-nav__primary usa-accordion': isPrimary,
      'usa-nav__secondary-links': isSecondary,
      'usa-nav__submenu': isSubnav,
      'usa-nav__submenu-list': isMegamenu,
      'usa-list usa-list--unstyled': isFooterSecondary,
    },
    className
  )

  const liClasses = classnames({
    'usa-nav__primary-item': isPrimary,
    'usa-nav__secondary-item': isSecondary,
    'usa-nav__submenu-item': isSubnav || isMegamenu,
    'usa-footer__secondary-link': isFooterSecondary,
  })

  return (
    <ul className={ulClasses} {...ulProps}>
      {items.map((item, i) => (
        <li key={`item_${i}`} className={liClasses}>
          {item}
        </li>
      ))}
    </ul>
  )
}