import { TaskData } from "../aliases/interfaces/TaskData";
import { TASKS_LIST_KEY } from "../constants/TASKS_LIST_KEY";

type TasksListKey = typeof TASKS_LIST_KEY;

export const saveTasksInLocaleStorage = (tasks: TaskData[], tasksListKey: TasksListKey) => localStorage.setItem(tasksListKey, JSON.stringify(tasks));

export const getInitialTasks = (tasksListKey: TasksListKey): TaskData[] | [] => {
    const tasks = localStorage.getItem(tasksListKey);
    
    return tasks ? JSON.parse(tasks) : [] as TaskData[];
};