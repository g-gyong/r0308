import React, { useState } from 'react'

import { insertTodo, getTodos } from '../../service/todo'
import { useTodoContext } from './context'

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
    <div>
      <input
        onChange={handleText}
        onKeyDown={handleEnter}
        placeholder="Todo를 입력해주세요. "
        value={text}
      />
    </div>
  )
}

export default Header