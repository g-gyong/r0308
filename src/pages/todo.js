import React from 'react'

import Todo from '../components/todo'
import { Container } from '../design-system'
import { TodoContextProvider } from '../components/todo/context'

function TodoPage() {
  return (
    <TodoContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoContextProvider>
  )
}

export default TodoPage
