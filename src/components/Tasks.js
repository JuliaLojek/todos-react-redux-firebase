import React, { useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Container, ButtonGroup } from '@material-ui/core';
import { Delete, RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, selectFilteredTasks, selectIsLoading, selectIsError, selectInputNewTask, selectInputSearchTask } from '../modules/selectors';
import { FETCH_INIT_TASKS, SHOW_ALL, SHOW_DONE, SHOW_UNDONE, INPUT_NEW_TASK, INPUT_SEARCH_TASK, SEND_NEW_TASK, TOGGLE_TASK_STATUS, DELETE_TASK } from '../modules/actions';

const Tasks = () => {
  const taskList = useSelector(state => selectAllTasks(state));
  const filteredTasks = useSelector(state => selectFilteredTasks(state));
  const isLoading = useSelector(state => selectIsLoading(state));
  const isError = useSelector(state => selectIsError(state));
  const inputNewTask = useSelector(state => selectInputNewTask(state));
  const inputSearchTask = useSelector(state => selectInputSearchTask(state));

  const dispatch = useDispatch();
  const getTasks = () => dispatch(FETCH_INIT_TASKS());
  const showAll = () => dispatch(SHOW_ALL());
  const showDone = () => dispatch(SHOW_DONE());
  const showUndone = () => dispatch(SHOW_UNDONE());
  const setInputNewTask = (value) => dispatch(INPUT_NEW_TASK(value));
  const setInputSearchTask = (value) => dispatch(INPUT_SEARCH_TASK(value));
  const sendNewTask = (title) => dispatch(SEND_NEW_TASK(title));
  const toggleTaskStatus = (task) => dispatch(TOGGLE_TASK_STATUS(task));
  const deleteTask = (task) => dispatch(DELETE_TASK(task));

  useEffect(() => {
    getTasks();
  });

  return (
        <Container maxWidth="md">
          <TextField
            label={'enter new task'}
            fullWidth={true}
            value={inputNewTask}
            onChange={(e) => setInputNewTask(e.target.value)}
          />
          <br />
          <br />
          <Button
            fullWidth={true}
            onClick={() => sendNewTask(inputNewTask)}
            variant={'contained'}
            color={'primary'}
          >
            add
          </Button>
          <br />
          <br />
          <TextField
            label={'which task are you looking for?'}
            fullWidth={true}
            value={inputSearchTask}
            onChange={(e) => setInputSearchTask(e.target.value)}
          />
          <br />
          <br />

          <ButtonGroup size="small" fullWidth={true}>
            <Button
              onClick={showAll}
            >
              show all tasks
            </Button>
            <Button
              onClick={showDone}
            >
              show done only
            </Button>
            <Button
              onClick={showUndone}
            >
              show undone only
            </Button>
          </ButtonGroup>
          
          <br />
          <br />

          {isError ?
            'error!'
            :
            isLoading ?
              'loading...'
              :
              taskList.length > 0 ?
                <List>
                  {filteredTasks.length > 0 ?
                    filteredTasks.map((task) => {
                      return (
                        <ListItem key={task.key} selected={task.done ? true : false}>
                          <IconButton onClick={() => toggleTaskStatus(task)}>
                            {task.done ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
                          </IconButton>

                          <ListItemText
                            primary={task.title}
                          />

                          <ListItemSecondaryAction>
                            <IconButton onClick={() => deleteTask(task)}>
                              <Delete />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      )
                    })
                    :
                    <p>no matches</p>
                  }
                </List>
                :
                <p>
                  You don't have any tasks yet. Add some!
                </p>
              
          }
        </Container>
  )
}

export default Tasks;