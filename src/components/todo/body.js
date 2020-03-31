import React from 'react'

import { useTodoContext } from './context'
import { deleteTodo, getTodos, updateTodo } from '../../service/todo'

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
    <div>
      {filteredTodos.map((todo, i) => {
        const { id, title, isDone } = todo
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={isDone}
              value={isDone}
              onChange={() => handleUpdateStatus(todo)}
            />
            <span>{title}</span>
            <button onClick={() => handleDeleteTodo(id)}>삭제</button>
          </div>
        ) //즉시 리턴 안함 => ( 렌더링 ) X
      })}
    </div>
  )
}

export default Body