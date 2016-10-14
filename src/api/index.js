const fakeDatabase = {
  todos: [{
    id: Math.random(),
    text: 'hey',
    completed: true,
  }, {
    id: Math.random(),
    text: 'ho',
    completed: true,
  }, {
    id: Math.random(),
    text: 'let`s go',
    completed: true,
  }]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => (
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
)
