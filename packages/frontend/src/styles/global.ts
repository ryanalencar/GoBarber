import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`
