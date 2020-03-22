//글로벌로 형제끼리 상태 공유
import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

export function PokemonContextProvider({ children }) {
  const [pokemon, setPokemon] = useState(null)
  return (
    <Context.Provider value={{ pokemon, setPokemon }}>
      {children}
    </Context.Provider>
  )
}

export function usePokemonContext() {
  return useContext(Context)
}

PokemonContextProvider.propTypes = {
  children: PropTypes.element,
}
