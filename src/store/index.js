import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import catReducer from './reducers'

const reducer = combineReducers({ catReducer })

const store = createStore(reducer, applyMiddleware(thunk))

export default store
