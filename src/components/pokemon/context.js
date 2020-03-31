//글로벌로 형제끼리 상태 공유
import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const Context = createContext() //컨텍스트 객체 생성

export function PokemonContextProvider({ children }) {
  const [pokemon, setPokemon] = useState(null) //초기 상태 null, 상태 업데이트
  return (
    <Context.Provider value={{ pokemon, setPokemon }}>
      {children}
    </Context.Provider> //컨텍스트의 현재 값 = value props
  )
}

export function usePokemonContext() {
  return useContext(Context) //useContext의 인자는 컨텍스트 객체 그 자체이어야 함
}

PokemonContextProvider.propTypes = {
  children: PropTypes.element,
}
