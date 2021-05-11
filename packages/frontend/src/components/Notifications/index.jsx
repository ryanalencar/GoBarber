import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MdNotifications } from 'react-icons/md'
import { formatDistance, parseIso } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '~/services/api'
import useIsMounted from '../common/useIsMounted'

import { Container, Badge, Notification, NotificationList, Scroll } from './styles'

function Notifications() {
  const isMounted = useIsMounted()
  const [visible, setVisible] = useState(false)
  const [notifications, setNotifications] = useState([])

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  )

  const fetchData = useCallback(async () => {
    if (isMounted.current) {
      const response = await api.get('notifications')

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(parseIso(notification.createdAt), new Date(), {
          addSuffix: true,
          locale: pt
        })
      }))
      setNotifications(data)
    }
  }, [isMounted])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleToggleNotification = () => {
    setVisible(!visible)
  }

  const handleMarkAsRead = useCallback(async id => {
    await api.put(`notifications/${id}`)
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    )
  }, [])

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleToggleNotification}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(({ _id, content, read, timeDistance }) => (
            <Notification key={_id} unread={!read}>
              <p>{content}</p>
              <time>{timeDistance}</time>
              {!read && (
                <button type="button" onClick={() => handleMarkAsRead(_id)}>
                  Marcar como lida.
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  )
}

export default Notifications
