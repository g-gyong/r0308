import React, { useState } from 'react'
import styled from 'styled-components'

import { insertTodo, getTodos } from '../../service/todo'
import { useTodoContext } from './context'

const InputBox = styled.div`
  width:80%;
  margin: 0 auto;
  .writing {
    width:100%;
    padding:5px 8px;
    box-sizing:border-box;
  }
`

function Header() {
  const [text, setText] = useState('') //setText는 text의 변경값 저장하는 곳
  const {
    actions: { setTodos },
  } = useTodoContext()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleEnter = async (e) => {
    if (e.keyCode === 13) {
      const success = await insertTodo({
        title: text,
        isDone: false,
      })
      if (success) {
        setTodos(await getTodos())
        setText('')
      } else {
        window.alert('데이터를 추가하는데 실패했습니다.')
      }
    } //엔터의 키코드는 13번
  }
  return (
    <InputBox>
      <input
        className="writing"
        onChange={handleText}
        onKeyDown={handleEnter}
        placeholder="Input your to-do "
        value={text}
      />
    </InputBox>
    //onChange 이벤트는 value가 변경될 때 발생
  )
}

export default Header