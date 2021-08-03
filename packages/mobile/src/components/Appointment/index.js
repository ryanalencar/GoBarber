import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import { parseISO, formatRelative } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { Container, Left, Avatar, Info, Name, Time } from './styles'

function Appointment({ data }) {
  const { date, provider, past, cancelable, onCancel, canceled_at } = data
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(date), new Date(), {
      locale: pt,
      addSuffix: true,
    })
  }, [date])

  return (
    <Container past={past}>
      <Left>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar_url
              : 'https://pics.freeicons.io/uploads/icons/png/6882831431553666420-512.png',
          }}
        />
        <Info>
          <Name>{provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {cancelable && !canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name='event-busy' size={20} color='#f64c75' />
        </TouchableOpacity>
      )}
    </Container>
  )
}

Appointment.defaultProps = {
  data: {},
}

Appointment.propTypes = {
  data: PropTypes.object,
}

export default Appointment
