import React from 'react'

import { FILTERS } from './constants'
import { useTodoContext } from './context'

function Footer() {
  const {
    state: { filter },
    actions: { setFilter },
  } = useTodoContext()

  const handleFilter = (filter) => {
    setFilter(filter)
  }
  
  return (
    <div>
      {FILTERS.map((type, i) => (
        <div
          key={i}
          style={{ fontWeight: type === filter ? 'bold' : 'nomal' }}
          onClick={() => handleFilter(type)}>
          {type}
        </div>
      ))}
    </div>
  )
}

export default Footer