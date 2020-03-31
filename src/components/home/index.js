import React from 'react'

import { useApplicationContext } from './context'

function Home() {
  const { state, actions } = useApplicationContext()

  const { count } = state
  const { increment, decrement } = actions

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Home
