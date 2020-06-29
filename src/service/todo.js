// 서버 메소드 : GET, POST(값을 서버로 요청), DELETE, PUT

export async function getTodos() {
  const response = await fetch('http://localhost:5000/todos') //fetch의 기본메소드가 get이라 생략함

  if (!response.ok) {
    return []
  }

  return response.json()
}

export async function insertTodo(payload) {
  const response = await fetch('http://localhost:5000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    /*body에 데이터를 넘겨주려면 header의 type 정의가 필요함, 
    대부분의 API에서 활용하는 Content-Type 헤더로써 
    application/json으로 payload와 함께 HTTP 요청을 하게 되면
     서버가 JSON 타입으로 변환해서 사용한다.*/
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function updateTodo(payload) {
  const response = await fetch(`http://localhost:5000/todos/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.ok
}
