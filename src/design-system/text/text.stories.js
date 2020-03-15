import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { Text } from './index'

export default { title: 'Text', component: Text } //분류 제목 'Text'

export const BaseText = () => (
  <>
    <Text
      bold={boolean('bold', false)}
      inlineBlock={boolean('inlineBlock', false)}
      margin={text('margin')}
      padding={text('padding')}
    >
      테스트 중 입니다
    </Text>

    <Text margin="10px 20px">마진 10 20</Text>
    <Text padding="10px 20px">패딩 10 20</Text>
    <Text inlineBlock>인라인 블록</Text>
  </>
)
