// actions describe what happened, they don't describe how the application's state changes

// action types
export const ADD_LINE = "ADD_LINE"
export const MARK_AS_DONE = "MARK_AS_DONE"

export const SortList = {
  SHOW_ALL: "SHOW_ALL",
  HIDE_DONE: "HIDE_DONE"
}

export const setVisibility = {
  SHOW_ALL: "SHOW_ALL",
  DONT_SHOW_MARKED: "DONT_SHOW_MARKED"
}

// action creators
export const addLine = text => ({ type: ADD_LINE, text })
export const markAsDone = () => ({ type: MARK_AS_DONE })
export const setVisibility = (filter) => ({ type: SET_VISIBILITY, filter })
