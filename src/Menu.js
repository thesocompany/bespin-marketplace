import React from 'react'
import { NavList, NavListProps } from './NavList'

// type MenuProps = {
//   items: React.ReactNode[],
//   isOpen: boolean
// }

export const Menu = (props) => {
  const { items, isOpen, ...navListProps } = props
  return <NavList items={items} subnav hidden={!isOpen} {...navListProps} />
}

export default Menu