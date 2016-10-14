import { createStore } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(todoApp, persistedState)

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
    })
  })

  return store
}

export default configureStore
