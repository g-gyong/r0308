import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { Container } from './index'

export default { title: 'Container', component: Container }

export const BaseContainer = () => (
  <>
    <Container
      maxWidth={number('maxWidth', 720)}
      margin={text('margin')}
      padding={text('padding')}
      centered={boolean('centered', false)}
      textAlign={select('textAlign', ['left', 'center', 'right'], 'left')}
    >
      테스트 중 입니다
    </Container>
  </>
)
