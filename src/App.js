import React from 'react'
import Title from './components/title'
import WebtoonsPage from './pages/webtoons'
import { Container } from './design-system/container'
import { GlobalStyle } from './components/reset-style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title title="웹툰" />
        <WebtoonsPage />
      </Container>
    </>
  )
}

export default App
