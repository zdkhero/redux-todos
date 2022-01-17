import * as types from '../actionTypes/filter'

const filter = (state = 'all', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload
    default:
      return state
  }
}

export default filter
