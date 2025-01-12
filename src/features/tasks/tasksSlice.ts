import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialTasks } from './tasksLocaleStorage';
import { tasksListKey } from '../../tasksListKey';
import { TaskData } from '../../common/aliases/interfaces/TaskData';
import { RootState } from './store';

interface TasksState {
    tasks: ReturnType<typeof getInitialTasks>;
    hideDoneTasks: boolean;
}

type TaskId = TaskData["id"];
type TaskIdPayload = PayloadAction<TaskId>;

type QueryValue = TaskData["content"] | null;

const initialState: TasksState = {
    tasks: getInitialTasks(tasksListKey),
    hideDoneTasks: false,
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, { payload: newTask }: PayloadAction<TaskData>) => {
            state.tasks.push(newTask);
        },
        toggleTaskDone: (state, { payload: taskId }: TaskIdPayload) => {
            const donedTaskIndex = state.tasks.findIndex(({ id }) => id === taskId);
            state.tasks[donedTaskIndex].done = !state.tasks[donedTaskIndex].done;
        },
        removeTask: (state, { payload: taskId }: TaskIdPayload) => {
            const taskToRemoveIndex = state.tasks.findIndex(({ id }) => id === taskId);
            state.tasks.splice(taskToRemoveIndex, 1);
        },
        toggleImportantContent: (state, { payload: taskId }: TaskIdPayload) => {
            const taskToToggleIndex = state.tasks.findIndex(({ id }) => id === taskId);
            state.tasks[taskToToggleIndex].important = !state.tasks[taskToToggleIndex].important;
        },
        toggleHideDoneTasks: (state) => {
            if (state.tasks.some(({ done }) => done)) {
                state.hideDoneTasks = !state.hideDoneTasks
            }
        },
        toggleAllTaskDone: (state) => {
            state.tasks.forEach(task => {
                if (!task.done) {
                    task.done = !task.done;
                }
            });
        },
        downloadExampleTasks: () => { },
        setTasks: (state, { payload: tasks }: PayloadAction<TaskData[]>) => {
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

const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDoneTasks = (state: RootState) => selectTasksState(state).hideDoneTasks;

export const selectAreAllTasksDone = (state: RootState) => selectTasks(state).every(({ done }) => done);
export const selectAreSomeTasksDone = (state: RootState) => selectTasks(state).some(({ done }) => done);
export const selectIsTasksListEmpty = (state: RootState) => selectTasks(state).length === 0;

export const selectTasksLength = (state: RootState) => selectTasks(state).length;
export const selectTaskById = (state: RootState, taskId: TaskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTaskByQuery = (state: RootState, query: QueryValue) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()));
};
export const selectIsSearchTasksEmpty = (state: RootState, query: QueryValue) => selectTaskByQuery(state, query).length === 0;

export const tasksReducer = tasksSlice.reducer;