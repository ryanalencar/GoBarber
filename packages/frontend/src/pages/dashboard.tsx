import React, { useState, useMemo, useEffect } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO
} from 'date-fns'
import { pt } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz'

import PageLayout from '~/components/layouts'
import useIsMounted from '~/components/common/useIsMounted'
import api from '~/services/api'

interface IStyledProps {
  theme?: DefaultTheme
  available?: boolean
  past?: boolean
}

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`

const Time = styled.li<IStyledProps>`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${({ past }) => (past ? 0.6 : 1)};
`

const TimeHour = styled.strong<IStyledProps>`
  display: block;
  color: ${({ theme, available }: IStyledProps) =>
    available ? '#666' : theme.colors.rocketPurple};
  font-size: 20px;
  font-weight: normal;
`

const TimeStatus = styled.span<IStyledProps>`
  display: block;
  margin-top: 3px;
  color: ${({ available }) => (available ? '#999' : '#666')};
`

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const Dashboard: React.FC = () => {
  const isMounted = useIsMounted()
  const [date, setDate] = useState(new Date())
  const [schedule, setSchedule] = useState([])

  const dateFormatted = useMemo(() => {
    return format(date, "d 'de' MMMM", { locale: pt })
  }, [date])

  useEffect(() => {
    async function loadSchedule() {
      if (isMounted.current) {
        const response = await api.get('schedule', {
          params: { date }
        })

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

        const data = range.map(hour => {
          const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0)
          const compareDate = utcToZonedTime(checkDate, timezone)

          return {
            time: `${hour}:00h`,
            past: isBefore(compareDate, new Date()),
            appointment: response.data.find(
              a => parseISO(a.date).toString() === compareDate.toString()
            )
          }
        })

        setSchedule(data)
      }
    }
    loadSchedule()
  }, [date, isMounted])

  const handlePrevDay = () => {
    setDate(subDays(date, 1))
  }

  const handleNextDay = () => {
    setDate(addDays(date, 1))
  }

  return (
    <PageLayout>
      <Container>
        <header>
          <button type="button" onClick={handlePrevDay}>
            <MdChevronLeft color="#fff" size={32} />
          </button>
          <strong>{dateFormatted}</strong>
          <button type="button" onClick={handleNextDay}>
            <MdChevronRight color="#fff" size={32} />
          </button>
        </header>

        <ul>
          {schedule.map(({ time, past, appointment }) => (
            <Time key={time} past={past} available={!appointment}>
              <TimeHour available={!appointment}>{time}</TimeHour>
              <TimeStatus available={!appointment}>
                {appointment ? appointment.user.name : 'Em Aberto'}
              </TimeStatus>
            </Time>
          ))}
        </ul>
      </Container>
    </PageLayout>
  )
}

export default Dashboard
