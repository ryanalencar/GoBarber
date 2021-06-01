import React, { useState, useMemo } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { format, subDays, addDays } from 'date-fns'
import { pt } from 'date-fns/locale'

import PageLayout from '~/components/layouts'

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

const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${({ past }) => (past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${({ theme, available }: IStyledProps) =>
      available ? '#666' : theme.colors.rocketPurple};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${({ available }) => (available ? '#999' : '#666')};
  }
`

const Dashboard: React.FC = () => {
  const [date, setDate] = useState(new Date())

  const dateFormatted = useMemo(() => {
    return format(date, "d 'de' MMMM", { locale: pt })
  }, [date])

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
          <Time past>
            <strong>08:00</strong>
            <span>Diego Fernandes</span>
          </Time>
          <Time available>
            <strong>09:00</strong>
            <span>Em aberto</span>
          </Time>
          <Time>
            <strong>10:00</strong>
            <span>Em aberto</span>
          </Time>
          <Time>
            <strong>11:00</strong>
            <span>Em aberto</span>
          </Time>
        </ul>
      </Container>
    </PageLayout>
  )
}

export default Dashboard
