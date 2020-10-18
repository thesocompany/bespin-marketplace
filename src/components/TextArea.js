import React from 'react'
import classnames from 'classnames'

// export interface TextareaProps {
//     id: string,
//     name: string,
//     className?: string,
//     error?: boolean,
//     success?: boolean,
//     children?: React.ReactNode,
//     inputRef?: TextareaRef,
//   }
  
  export const TextArea = (props) => {
    const {
      id,
      name,
      className,
      error,
      success,
      children,
      inputRef,
      ...inputProps
    } = props
  
    const classes = classnames(
      'usa-textarea',
      {
        'usa-input--error': error,
        'usa-input--success': success,
      },
      className
    )
  
    return (
      <textarea
        data-testid="textarea"
        className={classes}
        id={id}
        name={name}
        ref={inputRef}
        {...inputProps}>
        {children}
      </textarea>
    )
  }
  
  export default TextArea
  