import React, { useEffect } from 'react'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { getTodos } from '../../service/todo'
import { useTodoContext } from './context'

function Todo() {
  const {
    actions: { setTodos },
  } = useTodoContext()

  useEffect(() => {
    async function initializeTodos() {
      setTodos(await getTodos())
    }
    initializeTodos()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Todo</h1>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Todo
