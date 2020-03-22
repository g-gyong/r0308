import React, { useState } from 'react'

import Detail from './detail'
import List from './list'
import { Container, Text } from '../../design-system'

function Pokemon() {
  /* 부모에서 상태 공유
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const handleSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
  }
  console.log('selectedPokemon', selectedPokemon)
  return (
    <Container>
      <Detail pokemon={selectedPokemon} />
      <List onClick={handleSelectedPokemon} />
    </Container>
  ) */
  return (
    <Container>
      <Detail />
      <List />
    </Container>
  )
}

export default Pokemon
