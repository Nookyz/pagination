import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: IBM Plex Sans, sans-serif;
    vertical-align: baseline;
  }

  body {
    background-color: #F1F3F6;
    line-height: 1;
  }
`
