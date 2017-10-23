import { GET_CATS_IF_NOT_FETCHED, RECEIVE_CATS } from './constants'
import { getCats, deleteCat } from './services'
// import catsMock from './dummyCat'
//
// export function fetchCatsMock () {
//   return function (dispatch) {
//     dispatch(receiveCats(catsMock))
//   }
// }
//
// export function deleteACatMock (catId) {
//   return function (dispatch) {
//     const newCats = catsMock.filter(function (cat) {
//       return cat.id !== catId
//     })
//     dispatch(receiveCats(newCats))
//   }
// }
//
export function fetchCats () {
  return function (dispatch) {
    // before we go to server, go ahead and make call pending
    dispatch({ type: GET_CATS_IF_NOT_FETCHED })

    return getCats().then(cats => {
      dispatch(receiveCats(cats))
    })
  }
}

export function deleteACat (catId) {
  return function (dispatch) {
    return deleteCat(catId).then(res => {
      // dispatch
      console.log(res)
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
