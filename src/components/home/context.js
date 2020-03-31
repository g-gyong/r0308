import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'

const Context = createContext()
const ACTION_TYPES = {
  IMCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.IMCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    default: {
      return state
    }
  }
}

export function ApplicationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  })

  const actions = useMemo(
    () => ({
      increment: () => dispatch({ type: ACTION_TYPES.IMCREMENT }),
      decrement: () => dispatch({ type: ACTION_TYPES.DECREMENT }),
    }), //약속된 액션을 디스패치
    [dispatch],
  )
  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  )
}

export function useApplicationContext() {
  return useContext(Context) //컨텍스트의 value를 빼오기 위해 사용
}

ApplicationProvider.propTypes = {
  children: PropTypes.element,
}
