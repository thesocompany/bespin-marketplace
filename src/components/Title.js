import React from 'react'
import classnames from 'classnames'

// interface TitleProps {
//   children: React.ReactNode
// }

export const Title = (props) => {
  const { className, children, ...divProps } = props
  const classes = classnames('usa-logo', className)

  return (
    <div className={classes} {...divProps}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

export default Title