import React, { useState } from "react";
import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderPanel } from "../../../common/HeaderPanel";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
import Buttons from "./Buttons";
import { PageTitle } from "../../../common/PageTitle";
import { Button } from "./Buttons/styled";
import { useAppDispatch } from "../../../reduxTypedHooks";
import { downloadExampleTasks } from "../tasksSlice";

export function TasksPage() {
  const titleOfTasksContent = "Lista zadań";

  const loadingButtonStatusText = "loading";
  const initialButtonStatusText = "initial";

  const [buttonStatus, setButtonStatus] = useState(initialButtonStatusText);
  const dispatch = useAppDispatch();
  return (
    <>
      <PageTitle content={titleOfTasksContent} />
      <Section
        title={
          <HeaderPanel
            title="Dodaj nowe zadanie"
            sideContent={
              <Button
                type="button"
                disabled={buttonStatus === loadingButtonStatusText}
                onClick={() => {
                  setButtonStatus(loadingButtonStatusText);
                  setTimeout(() => {
                    dispatch(downloadExampleTasks());
                    setButtonStatus(initialButtonStatusText);
                  }, 1000)
                }}
              >
                {
                  buttonStatus === loadingButtonStatusText ?
                    <>Ładowanie...</> :
                    <>Pobierz przykładowe zadania</>
                }
              </Button>
            }
          />
        }
        body={
          <Form />
        }
      />
      <Section
        title={
          <HeaderPanel title={titleOfTasksContent} sideContent={<Buttons />} />
        }
        body={
          <>
            <Stats />
            <Search />
            <TasksList />
          </>
        }
      />
    </>
  );
};
