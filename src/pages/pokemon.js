import React from 'react'

import Pokemon from '../components/pokemon'
import { PokemonContextProvider } from '../components/pokemon/context'

function PokemonPage() {
  return (
    <PokemonContextProvider>
      <Pokemon />
    </PokemonContextProvider>
  )
}

export default PokemonPage
