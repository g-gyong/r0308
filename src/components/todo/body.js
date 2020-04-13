import React from 'react'
import styled from 'styled-components'

import { deleteTodo, getTodos, updateTodo } from '../../service/todo'
import { useTodoContext } from './context'

const List = styled.div`
  position:relative;
  width:80%;
  margin: 20px auto;
  .li {
    margin: 10px 0;
    border-bottom: 1px solid #F3F781;
  }
  .btn {
    border:none;
    position:absolute;
    right:0;
    font-size:10px;
  }
`

function Body() {
  const {
    state,
    actions: { setTodos },
  } = useTodoContext()
  const { filteredTodos } = state


  const handleDeleteTodo = async (id) => {
    const success = await deleteTodo(id)

    if (success) {
      setTodos(await getTodos())
    } else {
      window.alert(`${id}삭제에 실패했습니다. `)
    }
  }

  const handleUpdateStatus = async (todo) => {
    const success = await updateTodo({ ...todo, isDone: !todo.isDone })

    if (success) {
      setTodos(await getTodos())
    } else {
      window.alert(`${todo.id}삭제에 실패했습니다. `)
    }
  }

  return (
    <List>
      {filteredTodos.map((todo, i) => {
        const { id, title, isDone } = todo
        return (
          <div className="li" key={i}>
            <input
              type="checkbox"
              checked={isDone}
              value={isDone}
              onChange={() => handleUpdateStatus(todo)}
            />
            <span>{title}</span>
            <button className="btn" onClick={() => handleDeleteTodo(id)}>삭제</button>
          </div>
        ) //즉시 리턴 안함 => ( 렌더링 ) X
      })}
    </List>
  )
}

export default Body