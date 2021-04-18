import styled, { css } from 'styled-components'
import chroma from 'chroma-js'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface IBadge {
  hasUnread: boolean
}
interface INotification {
  unread: boolean
}

export const Container = styled.div`
  position: relative;
`

export const Badge = styled.button<IBadge>`
  background: none;
  border: 0;
  position: relative;

  ${({ hasUnread }): any =>
    hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 25px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`
export const Notification = styled.div<INotification>`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${({ theme }): any => chroma(theme.colors.rocketPurple).brighten(1)};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }): any => chroma(theme.colors.rocketPurple).brighten(0.1)};
    }
  }

  ${({ unread }): any =>
    unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        height: 8px;
        width: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`
