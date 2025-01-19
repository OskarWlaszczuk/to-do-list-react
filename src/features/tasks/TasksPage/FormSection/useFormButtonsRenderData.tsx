import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/reduxTypedHooks";
import { downloadExampleTasks, selectAreExampleTasksPresent } from "../../tasksSlice";
import { ButtonRenderData } from "../../../../common/aliases/interfaces/ButtonRenderData";

export const useFormButtonsRenderData = () => {
  const dispatch = useAppDispatch();
  const areExampletasksPresent = useAppSelector(selectAreExampleTasksPresent);

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
      areExampletasksPresent ?
        <>Pobrano</> :
        <>Pobierz przykładowe zadania</>
  );

  console.log(areExampletasksPresent)
  const formButtonsRenderData: ButtonRenderData[] = [
    {
      clickEventHandler: onExampleTasksDownload,
      disabledCondition: areTasksDownloading || areExampletasksPresent,
      content: buttonContent
    },
  ];

  return formButtonsRenderData;
};