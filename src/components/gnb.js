import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Text, Container } from '../design-system'

const GnbContainer = styled(Container)`
  /* 컨테이너 속성 상속 styled(부모) */
  border-bottom: 1px solid #efefef;
`

const LINKS = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: 'webtoon',
    label: 'webtoon',
  },
  {
    path: 'pokemon',
    label: 'pokemon',
  },
  {
    path: 'todo',
    label: 'todo',
  },
]


function Gnb({ title }) {
  /*const [title, setTitle] = useState('리액트 스터디') //값을 직접적으로 바꾸면 X ,  setTitle('변경 값')이용*/
  return (
    <GnbContainer padding="20px 20px">
      <Text fontSize="31" bold inlineBlock="inlineBlock">
        {title}
      </Text>
      {LINKS.map(({ path, label }, i) => (
        <Link to={path} key={i} style={{marginLeft:20, textDecoration:"none", fontSize:21}}>
          {label}
        </Link>
      ))}
    </GnbContainer>
  )
}

Gnb.propTypes = {
  title: PropTypes.string,
}

export default Gnb
