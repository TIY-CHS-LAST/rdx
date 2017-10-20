import { GET_CATS_IF_NOT_FETCHED, RECEIVE_CATS } from './constants'

const initialCatState = { isPending: false, cats: [] }

function catReducer (state = initialCatState, action) {
  switch (action.type) {
    case GET_CATS_IF_NOT_FETCHED:
      return Object.assign({}, state, { isPending: true })
    case RECEIVE_CATS:
      return Object.assign({}, state, { isPending: false, cats: action.cats })
    default:
      return state
  }
}

export default catReducer
