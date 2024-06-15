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

  const [tasks, setTasks] = useState([
    { id: 1, content: "Nakarmić psa", done: true },
    { id: 2, content: "Przygotować obiad", done: false },
  ]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
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

  return (
    <React.Fragment>
      <MainHeader />
      <Form />
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
