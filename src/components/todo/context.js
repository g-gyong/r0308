import React, { useReducer } from 'react'
import { createContext, useContext } from 'react'
import PropType from 'prop-types'

import { FILTERS } from './constants'

const Context = createContext()

const ACTION_TYPES = {
  SET_TODOS: 'SET_TODOS',
  SET_FILTER: 'SET_FILTER',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS: {
      //가져온 todos를 store에 저장
      const todos = action.payload

      return {
        ...state,
        todos,
        filteredTodos: mapToFilter(todos, state.filter),
      }
    }

    case ACTION_TYPES.SET_FILTER: {
      const filter = action.payload

      return {
        ...state,
        filter,
        filteredTodos: mapToFilter(state.todos, filter),
      }
    }

    default: {
      return state
    }
  }
}

export function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    todos: [], //원본
    filteredTodos: [], //필터링된 리스트
    filter: FILTERS[0], //기본 필터 ALL
  })
  const actions = {
    setTodos: (payload) => dispatch({ type: ACTION_TYPES.SET_TODOS, payload }), //payload를 받아 함께 넘겨줌
    setFilter: (payload) => dispatch({ type: ACTION_TYPES.SET_FILTER, payload })
  }

  return (
    <Context.Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useTodoContext() {
  return useContext(Context)
}

TodoContextProvider.propTypes = {
  children: PropType.element,
}

function mapToFilter(todos, filter) {
  //원본, 선택된 필터를 받음
  switch (filter) {
    case FILTERS[0]: {
      //ALL
      return todos
    }
    case FILTERS[1]: {
      //DOING
      return todos.filter((todo) => !todo.isDone)
    }
    case FILTERS[2]: {
      //DONE
      return todos.filter((todo) => todo.isDone)
    }
  }
}
