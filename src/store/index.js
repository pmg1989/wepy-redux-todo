import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import devToolsEnhancer from '../utils/remote-redux-devtools.js'
import rootReducer from './reducers'

export default function configStore () {
  const store = createStore(rootReducer, compose(
    applyMiddleware(promiseMiddleware),
    devToolsEnhancer({
      hostname: 'localhost',
      port: 8888,
      secure: false
    })
  ))
  return store
}
