export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
  id: Math.random(),
})

export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})
