import { useField } from '@unform/core'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;
  transition: all ease 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`
const ErrorMessage = styled.div`
  color: #ff8080;
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: bold;
  align-self: flex-start;
`

export default function Input(props) {
  const inputRef = useRef(null)
  const { name, ...rest } = props
  const { defaultValue, fieldName, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: ref => {
        return ref.value
      },
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      <StyledInput
        type="text"
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        onFocus={clearError}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}
