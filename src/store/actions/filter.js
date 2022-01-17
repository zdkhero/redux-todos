import * as types from '../actionTypes/filter'

export const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
})
