import React from 'react'
import classnames from 'classnames'
// import { deprecationWarning } from '../../deprecation'

import PrimaryButton from './Buttons'
import { Form, OptionalFormProps } from './Form'
import { Label } from './Label'
import { TextInput } from './TextInput'

// interface SearchInputProps {
//   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
//   inputId?: string,
//   inputName?: string,
//   size?: 'big' | 'small',
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   big?: boolean,
//   /**
//    * @deprecated since 1.6.0, use size
//    */
//   small?: boolean,
//   label?: React.ReactNode,
//   className?: string,
// }

export const Search = (props) => {
  const {
    onSubmit,
    inputId = 'search-field',
    inputName = 'search',
    size,
    big,
    small,
    label = 'Search',
    className,
    ...formProps
  } = props
  if (big) {
    console.log('Search property big is deprecated.  Use size')
  }
  if (small) {
    console.log('Search property big is deprecated.  Use size')
  }

  const isBig = size ? size === 'big' : big
  const isSmall = size ? size === 'small' : small
  const classes = classnames(
    'usa-search',
    {
      'usa-search--small': isSmall,
      'usa-search--big': isBig,
    },
    className
  )

  return (
    <Form
      onSubmit={onSubmit}
      className={classes}
      role="search"
      search={true}
      {...formProps}>
      <Label srOnly={true} htmlFor={inputId}>
        {label}
      </Label>
      <TextInput id={inputId} type="search" name={inputName} />
      <PrimaryButton type="submit">
        <span className={isSmall ? 'usa-sr-only' : 'usa-search__submit-text'}>
          Search
        </span>
      </PrimaryButton>
    </Form>
  )
}

export default Search