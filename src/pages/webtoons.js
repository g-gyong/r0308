import React from 'react'
import { Container } from '../design-system/container'
import Webtoons from '../components/webtoons'

//데이터를 가지고 와서 셋팅
function WebtoonsPage() {
  return (
    <Container>
      <Webtoons />
    </Container>
  )
}

export default WebtoonsPage
