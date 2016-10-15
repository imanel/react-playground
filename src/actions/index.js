import * as api from '../api'
import { getIsFetching } from '../reducers'

export const addTodo = (text) => (dispatch) => (
  api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response,
    })
  })
)

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: 'FETCH_TODO_REQUEST',
    filter,
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODO_SUCCESS',
        filter,
        response,
      })
    },
    error => {
      dispatch({
        type: 'FETCH_TODO_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      })
    }
  )
}

export const toggleTodo = (id) => (dispatch) => (
  api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response,
    })
  })
)
