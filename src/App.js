import React from "react";
import MainHeader from "./MainHeader";
import Form from "./Form";
import Section from "./Section";
import HeaderContent from "./HeaderContent";
import Buttons from "./Buttons";
import Stats from "./Stats";
import Tasks from "./Tasks";
import { useTasks } from "./useTasks";
import { useHideDoneTasks } from "./useHideDoneTasks";

function App() {
  const {
    tasks,
    removeTasks,
    toggleTasksDone,
    toggleAllTaskDone,
    addNewTaskContent,
    toggleBoldContent,
  } = useTasks();

  const {hideDoneTasks, toggleHideDoneTasks} = useHideDoneTasks(tasks);

  return (
    <>
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
                />
              }
            />
            <Stats tasks={tasks} />
            <Tasks
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              removeTasks={removeTasks}
              toggleTasksDone={toggleTasksDone}
              toggleBoldContent={toggleBoldContent}
            />
          </React.Fragment>
        }
      />
    </>
  );
}

export default App;
