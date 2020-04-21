import { mapObjectToArray } from "../functions";


export const API_URL = 'https://jfdd14-j-homework7.firebaseio.com/tasks/';

export const ACTION_TYPES = {
  FETCH_INIT_TASKS: 'FETCH_INIT_TASKS',
  SET_FETCHED_TASKS: 'SET_FETCHED_TASKS',
  SET_LOADING_TASKS: 'SET_LOADING_TASKS',
  SET_ERROR_TASKS: 'SET_ERROR_TASKS',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_UNDONE: 'SHOW_UNDONE',
  INPUT_NEW_TASK: 'INPUT_NEW_TASK',
  SEND_NEW_TASK: 'SEND_NEW_TASK',
  INPUT_SEARCH_TASK: 'INPUT_SEARCH_TASK',
  TOGGLE_TASK_STATUS: 'TOGGLE_TASK_STATUS',
  DELETE_TASK: 'DELETE_TASK'
};

export const FETCH_INIT_TASKS = () => {
  return dispatch => {
    return fetch(API_URL + ".json")
      .then(response => response.json())
      .then(tasks => mapObjectToArray(tasks))
      .then(taskList => dispatch(SET_FETCHED_TASKS(taskList)))
      .catch(error => dispatch(SET_ERROR_TASKS()))
  }
};

export const SET_FETCHED_TASKS = (taskList) => {
  return {
    type: ACTION_TYPES.SET_FETCHED_TASKS,
    value: taskList
  }
};

export const SET_LOADING_TASKS = () => {
  return {
    type: ACTION_TYPES.SET_LOADING_TASKS
  }
};

export const SET_ERROR_TASKS = () => {
  return {
    type: ACTION_TYPES.SET_ERROR_TASKS
  }
};

export const SHOW_ALL = () => {
  return {
    type: ACTION_TYPES.SHOW_ALL
  }
};

export const SHOW_DONE = () => {
  return {
    type: ACTION_TYPES.SHOW_DONE
  }
};

export const SHOW_UNDONE = () => {
  return {
    type: ACTION_TYPES.SHOW_UNDONE
  }
};

export const INPUT_NEW_TASK = (inputValue) => {
  return {
    type: ACTION_TYPES.INPUT_NEW_TASK,
    value: inputValue
  }
};

export const SEND_NEW_TASK = (taskTitle) => {
  return dispatch => {
    const body = { title: taskTitle, done: false };
    fetch(API_URL + ".json", {
      method: "POST",
      body: JSON.stringify(body)
    })
      .then(() => dispatch(INPUT_NEW_TASK("")))
      .then(() => dispatch(FETCH_INIT_TASKS()))
  }
};

export const INPUT_SEARCH_TASK = (inputValue) => {
  return {
    type: ACTION_TYPES.INPUT_SEARCH_TASK,
    value: inputValue
  }
};

export const TOGGLE_TASK_STATUS = (task) => {
  return dispatch => {
    const body = { title: task.title, done: !task.done };
    fetch(API_URL + task.key + ".json", {
      method: "PUT",
      body: JSON.stringify(body)
    })
      .then(() => dispatch(FETCH_INIT_TASKS()))
  }
};

export const DELETE_TASK = (task) => {
  return dispatch => {
    fetch(API_URL + task.key + ".json", {
      method: "DELETE"
    })
      .then(() => dispatch(FETCH_INIT_TASKS()))
  }
};