import React from 'react'
import styled from 'styled-components'
import { Container } from '../../design-system/container'
import { Text } from '../../design-system/text'
import PropsTypes from 'prop-types'

const Image = styled.img``

const Badge = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background-color: #ffc600;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  font-weight: bold;
`

function Webtoon({ source }) {
  const { title, src, updated } = source

  return (
    <Container textAlign="center">
      <Container position="relative" display="inline-block">
        <Image src={src} />
        <Text bold margin="10px 0">
          {title}
        </Text>
        {updated && <Badge>UP</Badge>}
      </Container>
    </Container>
  )
}

Webtoon.propTypes = {
  source: PropsTypes.object,
}

export default Webtoon
