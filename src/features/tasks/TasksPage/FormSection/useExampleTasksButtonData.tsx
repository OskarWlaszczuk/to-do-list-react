import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/reduxTypedHooks";
import { downloadExampleTasks, selectAreExampleTasksPresent } from "../../tasksSlice";

export const useExampleTasksDownloadButtonData = () => {
  const dispatch = useAppDispatch();
  const areExampleTasksPresent = useAppSelector(selectAreExampleTasksPresent);

  const exampleTasksDownloadStatuses = {
    idle: "idle",
    loading: "loading",
  } as const;

  type ExampleTasksDownloadStatus = keyof typeof exampleTasksDownloadStatuses;

  const [exampleTasksDownloadStatus, setExampleTasksDwonloadStatus] = useState<ExampleTasksDownloadStatus>(
    exampleTasksDownloadStatuses.idle
  );
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
      areExampleTasksPresent ?
        <>Pobrano</> :
        <>Pobierz przykładowe zadania</>
  );

  return {
    clickEventHandler: onExampleTasksDownload,
    disabledCondition: areTasksDownloading || areExampleTasksPresent,
    content: buttonContent
  };
};