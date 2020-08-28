import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/index'
import GlobalStyle from './components/UI/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
