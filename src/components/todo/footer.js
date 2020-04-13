import React from 'react'
import styled from 'styled-components'

import { FILTERS } from './constants'
import { useTodoContext } from './context'

const Pick = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;
  text-align: center;
  .PickUp {
    display: inline-block;
    margin-left: 15px;
    border-radius: 3px;
    padding: 4px 8px;
  }
  .PickUp:first-child {
    margin-left: 0;
  }
`

function Footer() {
  const {
    state: { filter },
    actions: { setFilter },
  } = useTodoContext()

  const handleFilter = (filter) => {
    setFilter(filter)
  }

  return (
    <Pick>
      {FILTERS.map((type, i) => (
        <div
          className="PickUp"
          key={i}
          style={{
            fontWeight: type === filter ? 'bold' : 'normal',
            backgroundColor: type === filter ? '#F3F781' : '',
          }}
          onClick={() => handleFilter(type)}>
          {type}
        </div>
      ))}
    </Pick>
  )
}

export default Footer
