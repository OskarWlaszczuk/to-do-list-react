import { TaskData } from "../../../common/aliases/interfaces/TaskData";
import { tasksListKey } from "../../../common/constants/tasksListKey";

type TasksListKey = typeof tasksListKey;

export const saveTasksInLocaleStorage = (tasks: TaskData[], tasksListKey: TasksListKey) => localStorage.setItem(tasksListKey, JSON.stringify(tasks));

export const getInitialTasks = (tasksListKey: TasksListKey): TaskData[] | [] => {
    const tasks = localStorage.getItem(tasksListKey);
    
    return tasks ? JSON.parse(tasks) : [] as TaskData[];
};