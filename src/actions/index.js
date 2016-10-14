import * as api from '../api'

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
  id: Math.random(),
})

export const fetchTodos = (filter) => (
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  )
)

export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})
