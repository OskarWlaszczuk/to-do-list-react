import React, { useState } from "react";
import MainHeader from "./MainHeader";
import Form from "./Form";
import Section from "./Section";
import HeaderContent from "./HeaderContent";
import Buttons from "./Buttons";
import Stats from "./Stats";
import Tasks from "./Tasks";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const [tasks, setTasks] = useState([]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => (
      tasks.some(({ done }) => done) ?
        hideDoneTasks = !hideDoneTasks :
        hideDoneTasks
    ));
  };

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

  return (
    <React.Fragment>
      <MainHeader />
      <Form
        addNewTaskContent={addNewTaskContent}
      />
      <Section
        children={
          <React.Fragment>
            <HeaderContent
              title="Lista zadań"
              children={
                <Buttons
                  tasks={tasks}
                  hideDoneTasks={hideDoneTasks}
                  toggleHideDoneTasks={toggleHideDoneTasks}
                  toggleAllTaskDone={toggleAllTaskDone}
                />}
            />
            <Stats tasks={tasks} />
            <Tasks
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              removeTasks={removeTasks}
              toggleTasksDone={toggleTasksDone}
            />
          </React.Fragment>}
      />
    </React.Fragment >
  );
};

export default App;
