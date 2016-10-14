const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
  id: Math.random(),
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export { addTodo, toggleTodo }
