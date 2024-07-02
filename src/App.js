import React, { useState } from "react";
import MainHeader from "./MainHeader";
import Form from "./Form";
import Section from "./Section";
import HeaderContent from "./HeaderContent";
import Buttons from "./Buttons";
import Stats from "./Stats";
import Tasks from "./Tasks";
import { ThemeProvider } from "styled-components";
import { useTasks } from "./useTasks";

const theme = {
  mainColor: {
    color: "teal",
  },
  breakPoints: {
    smallLaptop: 950,
    tabletHorizontal: 767,
    mobileL: 450,
    mobileM: 370,
  }
};

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const {
    tasks,
    removeTasks,
    toggleTasksDone,
    toggleAllTaskDone,
    addNewTaskContent,
  } = useTasks();

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => (
      tasks.some(({ done }) => done) ?
        hideDoneTasks = !hideDoneTasks :
        hideDoneTasks
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <Form addNewTaskContent={addNewTaskContent} />
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
    </ThemeProvider>
  );
};

export default App;
