import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },
        toggleImportantContent: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
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
        }
    },
});

export const { addTask, toggleTaskDone, removeTask, toggleHideDoneTasks, toggleImportantContent, toggleAllTaskDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;