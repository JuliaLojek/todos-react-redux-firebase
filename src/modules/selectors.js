export const selectAllTasks = (state) => {
  return state.taskList;
};

export const selectDoneTasks = (state) => {
  return state.taskList.filter(task => task.done);
};

export const selectUndoneTasks = (state) => {
  return state.taskList.filter(task => task.done === false);
};

export const selectFilteredTasks = (state) => {
  let results = [];
  if (state.showAll) {
    results = selectAllTasks(state);
  } else if (state.showDoneOnly) {
    results = selectDoneTasks(state);
  } else if (state.showUndoneOnly) {
    results = selectUndoneTasks(state);
  }
  return results.filter(task => {
    return task.title.toLowerCase().includes(state.inputSearchTask.toLowerCase());
  });
};

export const selectIsLoading = (state) => {
  return state.isLoading;
};

export const selectIsError = (state) => {
  return state.isError;
};

export const selectShowAll = (state) => {
  return state.showAll;
};

export const selectShowDone = (state) => {
  return state.showDone;
};

export const selectShowUndone = (state) => {
  return state.showUndone;
};

export const selectInputNewTask = (state) => {
  return state.inputNewTask;
};

export const selectInputSearchTask = (state) => {
  return state.inputSearchTask;
};