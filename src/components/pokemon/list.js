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
  }, [])

  console.log('pokemons', pokemons)

  const handleClickPokemon = async (url) => {
    setPokemon(await fetchPokemon(url))
  }

  return (
    <ListFrame display="inline-block" width="250">
      {pokemons.map(({ name, url }, i) => (
        <Text key={i} onClick={() => handleClickPokemon(url)}>
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
