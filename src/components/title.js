import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleContainer = styled.div`
  font-size: 31px;
  font-weight: bold;
  padding: 20px 10px;
  border-bottom: 1px solid #efefef;
`

function Title({ title }) {
  /*const [title, setTitle] = useState('리액트 스터디') //값을 직접적으로 바꾸면 X ,  setTitle('변경 값')이용*/
  return <TitleContainer>{title}</TitleContainer>
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
