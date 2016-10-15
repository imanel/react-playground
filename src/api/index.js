import { normalize } from 'normalizr'
import * as schema from './schema'

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
    completed: false,
  }]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => (
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return normalize(
          fakeDatabase.todos,
          schema.arrayOfTodos
        )
      case 'active':
        return normalize(
          fakeDatabase.todos.filter(t => !t.completed),
          schema.arrayOfTodos
        )
      case 'completed':
        return normalize(
          fakeDatabase.todos.filter(t => t.completed),
          schema.arrayOfTodos
        )
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
)

export const addTodo = (text) => (
  delay(500).then(() => {
    const todo = {
      id: Math.random(),
      text,
      completed: false,
    }
    fakeDatabase.todos.push(todo)
    return normalize(todo, schema.todo)
  })
)

export const toggleTodo = (id) => (
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id)
    todo.completed = !todo.completed
    return normalize(todo, schema.todo)
  })
)
