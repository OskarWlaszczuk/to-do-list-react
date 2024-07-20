export const saveTasksInLocaleStorage = (tasks, tasksListKey) => localStorage.setItem(tasksListKey, JSON.stringify(tasks));
export const getInitialTasks = tasksListKey => JSON.parse(localStorage.getItem(tasksListKey)) || [];
