import { GET_CATS_IF_NOT_FETCHED, RECEIVE_CATS } from './constants'
import { getCats } from './services'

export function fetchCats () {
  return function (dispatch) {
    // before we go to server, go ahead and make call pending
    dispatch({ type: GET_CATS_IF_NOT_FETCHED })

    return getCats().then(cats => {
      dispatch(receiveCats(cats))
    })
  }
}

export function receiveCats (cats) {
  return { type: RECEIVE_CATS, cats }
}
// function addTodo(todo) {
//   return {
//     type: ADD_TODO,
//     todo
//   }
// }
//
// store.dispatch(addTodo({text: 'learn redux', completed: false, id: 1}))
//
// // reducer
// {
//   id,
//   text,
//   complete: false
// }
// const initialState = {
//   todos: []
// }
//
// function todoReducer (state = initialState, action) {
//   switch (action.type) {
//     case 'DELETE_TODO':
//       return Object.assign({}, state, {
//         todos: state.todos.filter(todo => todo.id !== action.todo.id)
//       })
//     case 'ADD_TODO':
//       return Object.assign({}, state, {
//         todos: [ ...state.todos, action.todo ]
//       })
//
//     default:
//       return state
//
//   }
// }
//
// // state shape
