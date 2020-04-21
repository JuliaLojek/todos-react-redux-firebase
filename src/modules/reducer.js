import { ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  taskList: [],
  isLoading: true,
  isError: false,
  showAll: true,
  showDoneOnly: false,
  showUndoneOnly: false,
  inputNewTask: "",
  inputSearchTask: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FETCHED_TASKS:
      return state = {
        ...state,
        taskList: action.value,
        isLoading: false,
        isError: false
      };
    case ACTION_TYPES.SET_LOADING_TASKS:
      return state = {
        ...state,
        taskList: [],
        isLoading: true,
        isError: false
      };
    case ACTION_TYPES.SET_ERROR_TASKS:
      return state = {
        ...state,
        taskList: [],
        isLoading: false,
        isError: true
      };
    case ACTION_TYPES.SHOW_ALL:
      return state = {
        ...state,
        showAll: true,
        showDoneOnly: false,
        showUndoneOnly: false
      };
    case ACTION_TYPES.SHOW_DONE:
      return state = {
        ...state,
        showAll: false,
        showDoneOnly: true,
        showUndoneOnly: false
      };
    case ACTION_TYPES.SHOW_UNDONE:
      return state = {
        ...state,
        showAll: false,
        showDoneOnly: false,
        showUndoneOnly: true
      };
    case ACTION_TYPES.INPUT_NEW_TASK:
      return state = {
        ...state,
        inputNewTask: action.value
      };
    case ACTION_TYPES.INPUT_SEARCH_TASK:
      return state = {
        ...state,
        inputSearchTask: action.value
      };
    default:
      return state;
  }
}