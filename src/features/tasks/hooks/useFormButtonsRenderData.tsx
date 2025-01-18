import { useState } from "react";
import { useAppDispatch } from "../../../common/hooks/reduxTypedHooks";
import { downloadExampleTasks } from "../slices/tasksSlice";
import { ButtonRenderData } from "../../../common/aliases/interfaces/ButtonRenderData";

export const useFormButtonsRenderData = () => {
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

  const formButtonsRenderData: ButtonRenderData[] = [
    {
      clickEventHandler: onExampleTasksDownload,
      disabledCondition: areTasksDownloading,
      content: buttonContent
    },
  ];

  return formButtonsRenderData;
};