import React from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  color: #fff;
  margin: 5px 0 0;
  height: 44px;
  background: #3b9eff;
  border-radius: 4px;
  font-size: 16px;
  transition: all ease 0.3s;

  &:hover {
    background: ${chroma('#3b9eff').darken(0.3)};
  }

  &:disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
  }
`

export default function Button({ title, type, ...rest }) {
  return (
    <StyledButton type={type} {...rest}>
      {title}
    </StyledButton>
  )
}
