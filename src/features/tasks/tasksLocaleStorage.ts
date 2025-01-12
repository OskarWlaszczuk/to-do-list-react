import { TaskData } from "../../common/TaskData";
import { tasksListKey } from "../../tasksListKey";

type TasksListKey = typeof tasksListKey;

export const saveTasksInLocaleStorage = (tasks: TaskData[], tasksListKey: TasksListKey) => localStorage.setItem(tasksListKey, JSON.stringify(tasks));

export const getInitialTasks = (tasksListKey: TasksListKey): TaskData[] | [] => {
    const tasks = localStorage.getItem(tasksListKey);
    return tasks ? JSON.parse(tasks) : [] as TaskData[];
};