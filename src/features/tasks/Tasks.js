import React from "react";
import MainHeader from "../../common/MainHeader";
import Form from "./Form";
import Section from "../../common/Section";
import HeaderContent from "../../common/HeaderContent";
import Buttons from "./Buttons";
import Stats from "./Stats";
import TasksList from "./TasksList";
import { useTasks } from "./useTasks";
import { useHideDoneTasks } from "./useHideDoneTasks";

export function Tasks() {
  const {
    tasks,
    removeTasks,
    toggleTasksDone,
    toggleAllTaskDone,
    addNewTaskContent,
    toggleImportantContent,
  } = useTasks();

  const { hideDoneTasks, toggleHideDoneTasks } = useHideDoneTasks(tasks);

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
                //Buttons przenieść, do środka HeadeContent, nie jako chldren
                <Buttons
                  tasks={tasks}
                  hideDoneTasks={hideDoneTasks}
                  toggleHideDoneTasks={toggleHideDoneTasks}
                  toggleAllTaskDone={toggleAllTaskDone}
                />
              }
            />
            <Stats tasks={tasks} />
            <TasksList
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              removeTasks={removeTasks}
              toggleTasksDone={toggleTasksDone}
              toggleImportantContent={toggleImportantContent}
            />
          </React.Fragment>
        }
      />
    </>
  );
};
