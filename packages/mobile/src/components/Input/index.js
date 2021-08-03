import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, StyledInput } from './styles'

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={29} color='rgba(255,255,255,0.6)' />}
      <StyledInput ref={ref} {...rest} />
    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Input.defaultProps = {
  icon: null,
  style: {},
}

export default forwardRef(Input)
