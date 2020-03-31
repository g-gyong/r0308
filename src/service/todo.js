// 서버 메소드 : GET, POST(값을 서버로 요청), DELETE, PUT

export async function getTodos() {
  const response = await fetch('http://localhost:8000/todos') //fetch의 기본메소드가 get이라 생략함

  if (!response.ok) {
    return []
  }

  return response.json()
}

export async function insertTodo(payload) {
  const response = await fetch('http://localhost:8000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, //바디에 무언가를 넘겨주려면 헤더의 타입 정의가 필요함
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function updateTodo(payload) {
  const response = await fetch(`http://localhost:8000/todos/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:8000/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.ok
}
