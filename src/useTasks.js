import { useEffect, useState } from "react";

export const useTasks = () => {

    const getInitialTasks = () => {
        const localeStorageParsed = JSON.parse(localStorage.getItem('tasksListItems'))
        if (localeStorageParsed) {
            return localeStorageParsed;
        };

        return [];
    };

    const [tasks, setTasks] = useState(
        getInitialTasks
    );

    useEffect(() => {
        localStorage.setItem('tasksListItems', JSON.stringify(tasks));
    }, [tasks]);

    const removeTasks = id => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTasksDone = id => {
        setTasks(tasks => tasks.map(task => (
            task.id === id ?
                { ...task, done: !task.done } :
                task
        )));
    };

    const toggleAllTaskDone = () => {
        setTasks(tasks => tasks.map(task => (
            !task.done ?
                { ...task, done: true } :
                task
        )));
    };

    const addNewTaskContent = content => {
        if (content.trim() !== "") {
            setTasks(tasks => [
                ...tasks,
                {
                    content,
                    done: false,
                    id:
                        tasks.length === 0 ?
                            1 :
                            tasks[tasks.length - 1].id + 1
                },
            ]);
        };
    };
    return {
        tasks,
        removeTasks,
        toggleTasksDone,
        toggleAllTaskDone,
        addNewTaskContent,
    };
};