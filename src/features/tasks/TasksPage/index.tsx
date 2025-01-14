import React, { useState } from "react";
import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderPanel, HeaderPanel2 } from "../../../common/HeaderPanel";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
// import { ButtonsManagingTasks } from "./Buttons";
import { PageTitle } from "../../../common/PageTitle";
import { Button } from "./Buttons/styled";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { downloadExampleTasks, selectAreAllTasksDone, selectAreSomeTasksDone, selectHideDoneTasks, selectIsSearchTasksEmpty, toggleAllTaskDone, toggleHideDoneTasks, toggleTaskDone } from "../tasksSlice";
import { RootState } from "../store";
import { useQueryParameter } from "../useQueryParameter";
import { queryKey } from "../queryKey";

export function TasksPage() {
  const titleOfTasksContent = "Lista zadań";

  const exampleTasksDownloadStatuses = {
    idle: "idle",
    loading: "loading",
  } as const;

  type ExampleTasksDownloadStatus = keyof typeof exampleTasksDownloadStatuses;

  const [exampleTasksDownloadStatus, setExampleTasksDwonloadStatus] = useState<ExampleTasksDownloadStatus>(exampleTasksDownloadStatuses.idle);
  const areTasksDownloading = exampleTasksDownloadStatus === exampleTasksDownloadStatuses.loading;

  const onExampleTasksDownload = () => {
    setExampleTasksDwonloadStatus(exampleTasksDownloadStatuses.loading);

    setTimeout(() => {
      dispatch(downloadExampleTasks());
      setExampleTasksDwonloadStatus(exampleTasksDownloadStatuses.idle);
    }, 1000);
  };

  const buttonContent = (
    areTasksDownloading ?
      <>Ładowanie...</> :
      <>Pobierz przykładowe zadania</>
  );

  const dispatch = useAppDispatch();

  const formButtonsRenderData = [
    {
      clickEventHandler: onExampleTasksDownload,
      disabledCondition: areTasksDownloading,
      content: buttonContent
    },
  ];



  // const tasksManagementButtonsRenderData = [
  //   {
  //     clickEventHandler: () => dispatch(toggleHideDoneTasks()),
  //     disabledCondition: isSearchTasksEmpty || !areSomeDone,
  //     content: <>{hideDoneTasks && areSomeDone ? "Pokaż" : "Ukryj"} ukończone</>
  //   },
  //   {
  //     clickEventHandler: () => dispatch(toggleAllTaskDone()),
  //     disabledCondition: areAllDone || isSearchTasksEmpty,
  //     content: areAllDone ? "Ukończono" : "Ukończ wszystkie",
  //   },
  // ];

  const useTasksListButtonsRenderData = () => {

    const hideDoneTasks = useAppSelector(selectHideDoneTasks);

    const areAllDone = useAppSelector(selectAreAllTasksDone);
    const areSomeDone = useAppSelector(selectAreSomeTasksDone);
    const query = useQueryParameter(queryKey);

    const isSearchTasksEmpty = useAppSelector((state: RootState) => selectIsSearchTasksEmpty(state, query!));

    const tasksListButtonsRenderData = [
      {
        clickEventHandler: () => dispatch(toggleHideDoneTasks()),
        disabledCondition: isSearchTasksEmpty || !areSomeDone,
        content: <>{hideDoneTasks && areSomeDone ? "Pokaż" : "Ukryj"} ukończone</>
      },
      {
        clickEventHandler: () => dispatch(toggleAllTaskDone()),
        disabledCondition: areAllDone || isSearchTasksEmpty,
        content: areAllDone ? "Ukończono" : "Ukończ wszystkie",
      },
    ];

    return tasksListButtonsRenderData;
  };
  const tasksListButtonsRenderData = useTasksListButtonsRenderData();

  return (
    <>
      <PageTitle content={titleOfTasksContent} />
      <Section
        title={
          <HeaderPanel2
            title="Dodaj nowe zadanie"
            buttonsRenderData={formButtonsRenderData}
          />
          // <HeaderPanel
          //   title="Dodaj nowe zadanie"
          //   sideContent={
          //     <Button
          //       type="button"
          //       disabled={areTasksDownloading}
          //       onClick={onExampleTasksDownload}
          //     >
          //       {buttonContent}
          //     </Button>
          //   }
          // />
        }
        body={<Form />}
      />
      <Section
        title={
          <HeaderPanel2
            title={titleOfTasksContent}
            buttonsRenderData={tasksListButtonsRenderData}
          />
          // <HeaderPanel title={titleOfTasksContent} sideContent={<ButtonsManagingTasks />}
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
