import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container, Text } from '../../design-system'
import { fetchPokemons, fetchPokemon } from './service'
import { usePokemonContext } from './context'

const ListFrame = styled(Container)``

function List() {
  const [pokemons, setPokemons] = useState([]) //상태 업데이트, 초기 빈배열
  const { setPokemon } = usePokemonContext() //프로바이더로 감싸져 있어 접근가능해짐
  useEffect(() => {
    async function fetchAndSetPokemons() {
      setPokemons(await fetchPokemons())
    }
    fetchAndSetPokemons()
  }, []) //dependency가 빈배열이므로 useEffect 안의 내용을 한번 돌린 후 실행됨
  //useEffect는 DOM 렌더링 이후 매번 수행

  const handleClickPokemon = async (url) => {
    setPokemon(await fetchPokemon(url))
  }

  return (
    <ListFrame display="inline-block">
      {pokemons.map(({ name, url }, i) => (
        <Text key={i} onClick={() => handleClickPokemon(url)} style={{padding:3, cursor:"pointer"}}>
          {name}
        </Text>
      ))}
    </ListFrame>
  )
}

List.propTypes = {
  onClick: PropTypes.func,
}

export default List
