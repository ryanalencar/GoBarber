import styled from 'styled-components'
import chroma from 'chroma-js'

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

    input {
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
    }

    button {
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
    }

    a {
      color: #fff;
      font-size: 16px;
      opacity: 0.8;
      margin-top: ${({ theme }): number => theme.spacing.margin * 2}px;
      transition: all ease 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }
`
