import { useState } from "react";
import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderPanel2 } from "../../../common/HeaderPanel";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
import { PageTitle } from "../../../common/PageTitle";
import { useAppDispatch } from "../../../reduxTypedHooks";
import { downloadExampleTasks } from "../tasksSlice";
import { useTasksListButtonsRenderData } from "./hooks/useTasksListButtonsRenderData";

export function TasksPage() {
  const titleOfTasksContent = "Lista zadań";

  const dispatch = useAppDispatch();
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

  const formButtonsRenderData = [
    {
      clickEventHandler: onExampleTasksDownload,
      disabledCondition: areTasksDownloading,
      content: buttonContent
    },
  ];


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
