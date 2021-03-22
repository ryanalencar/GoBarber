import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }): number => theme.spacing.margin * 3}px;

    span {
      color: #fff;
      font-size: 16px;
      opacity: 0.8;
      margin-top: ${({ theme }): number => theme.spacing.margin * 2}px;
      transition: all ease 0.3s;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
`
