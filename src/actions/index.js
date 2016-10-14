const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
  id: Math.random(),
})

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter: filter,
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export { addTodo, setVisibilityFilter, toggleTodo }
