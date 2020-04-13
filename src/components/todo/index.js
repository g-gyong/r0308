import React, { useEffect } from 'react'
import styled from 'styled-components'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { getTodos } from '../../service/todo'
import { useTodoContext } from './context'
import { Text } from '../../design-system'

const Memo = styled.div`
  position:relative;
  background-color:#F5F6CE;
  width:300px;
  height:auto;
  margin: 50px 0 0 100px;
  .folded-side1 {
    display:inline-block;
    width:0;
    height:0;
    border-top: 50px solid #fff;
    border-right: 70px solid transparent;
  }
  .folded-side2 {
    display:inline-block;
    margin-left:-70px;
    width:0;
    height:0;
    border-bottom: 50px solid #F3F781;
    border-left: 70px solid transparent;
  }
  .title {
    position:relative;
    top:-20px;
    left:50%;
    transform:translateX(-50%);
    width:80%;
    height:50px;
    text-align:center;
    box-sizing:border-box;
    border-bottom:1px solid #BDBDBD;
  }
`

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
    <Memo>
      <span className="folded-side1"></span>
      <span className="folded-side2"></span>
      <Text className="title" fontSize="24" color="#BDBDBD">My Todo List</Text>
      <Header className="header"/>
      <Body className="body"/>
      <Footer className="footer"/>
    </Memo>
  )
}

export default Todo
