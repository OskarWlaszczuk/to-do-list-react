import { ButtonRenderData } from "../../../../common/aliases/interfaces/ButtonRenderData";
import { useExampleTasksDownloadButtonData } from "./useExampleTasksButtonData";

export const useFormButtonsRenderData = () => {
  const exampleTasksDownloadButtonData = useExampleTasksDownloadButtonData();
  const formButtonsRenderData: ButtonRenderData[] = [exampleTasksDownloadButtonData];

  return formButtonsRenderData;
};