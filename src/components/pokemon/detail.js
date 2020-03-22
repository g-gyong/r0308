import React from 'react'

import { Container, Text } from '../../design-system'
import { usePokemonContext } from './context'

function Detail() {
  const { pokemon } = usePokemonContext()

  if (!pokemon) {
    return null
  }

  const {
    weight,
    height,
    sprites: { front_default, back_default, font_shiny, back_shiny },
  } = pokemon

  return (
    <Container display="inline-block" width="400">
      <img src={front_default} />
      <img src={back_default} />
      <div>
        <span>몸무게: {weight}</span>
        <span>키: {height}</span>
      </div>
    </Container>
  )
}

export default Detail
