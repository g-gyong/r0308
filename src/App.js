import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Gnb from './components/gnb'
import { Container } from './design-system/container'
import { GlobalStyle } from './components/reset-style'
import WebtoonsPage from './pages/webtoons'
import HomePage from './pages/home'
import PokemonPage from './pages/pokemon'
import TodoPage from './pages/todo'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Gnb title="Navbar" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/webtoon" component={WebtoonsPage} />
          <Route path="/pokemon" component={PokemonPage} />
          <Route path="/todo" component={TodoPage} />
          <Route component={() => <div>404: Error</div>} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
