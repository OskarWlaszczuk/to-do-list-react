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

  const tasksDownloadStatuses = {
    initial: "initial",
    loading: "loading",
  } as const;

  type TaskDownloadStatus = keyof typeof tasksDownloadStatuses;

  const [buttonStatus, setButtonStatus] = useState<TaskDownloadStatus>(tasksDownloadStatuses.initial);
  const areTasksDownloading = buttonStatus === tasksDownloadStatuses.loading;

  const onExampleTasksDownload = () => {
    setButtonStatus(tasksDownloadStatuses.loading);

    setTimeout(() => {
      dispatch(downloadExampleTasks());
      setButtonStatus(tasksDownloadStatuses.initial);
    }, 1000);
  };

  const buttonContent = (
    areTasksDownloading ?
      <>Ładowanie...</> :
      <>Pobierz przykładowe zadania</>
  );

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
                disabled={areTasksDownloading}
                onClick={onExampleTasksDownload}
              >
                {buttonContent}
              </Button>
            }
          />
        }
        body={<Form />}
      />
      <Section
        title={<HeaderPanel title={titleOfTasksContent} sideContent={<Buttons />} />}
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
