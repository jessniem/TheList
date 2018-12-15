import { combineReducers } from "redux";

import { ADD_LINE, MARK_AS_DONE } from "../actions";

const setVisibilty = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SHOW_ALL:
    return action.filter
    default:
    return state
  }
}

const list = (state = [], action) {
  switch (action.type) {
    case ADD_LINE:
    return [
      ...state,
      {
        text: action.text,
      }
    ]
    case MARK_AS_DONE:
    return state.map((line, index) => {
        if (index === action.index) {
          return Object.assign({}, line, {
            marked: !line.marked
          })
        }
        return list
      })
      default:
      return state
  }
}

const listApp = combineReducers({
  list,
  setVisibilty,
})

export default listApp
