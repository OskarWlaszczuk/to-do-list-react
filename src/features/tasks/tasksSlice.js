import { createSlice } from '@reduxjs/toolkit';
import { getInitialTasks } from './tasksLocaleStorage';
import { tasksListKey } from '../../tasksListKey';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getInitialTasks(tasksListKey),
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        toggleImportantContent: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].important = !tasks[index].important;
        },
        toggleHideDoneTasks: (state) => {
            if (state.tasks.some(({ done }) => done)) {
                state.hideDoneTasks = !state.hideDoneTasks
            };
        },
        toggleAllTaskDone: ({ tasks }) => {
            tasks.forEach(task => {
                if (!task.done) {
                    task.done = !task.done;
                }
            });
        },
        downloadExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    toggleHideDoneTasks,
    toggleImportantContent,
    toggleAllTaskDone,
    downloadExampleTasks,
    setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDoneTasks = state => selectTasksState(state).hideDoneTasks;
export const selectIsAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsTasksEmpty = state => selectTasks(state).length === 0;

export const tasksReducer = tasksSlice.reducer;