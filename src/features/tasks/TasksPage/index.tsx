import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderPanel2 } from "../../../common/HeaderPanel";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
import { PageTitle } from "../../../common/PageTitle";
import { useTasksListButtonsRenderData } from "./hooks/useTasksListButtonsRenderData";
import { useFormButtonsRenderData } from "./hooks/useFormButtonsRenderData";

export function TasksPage() {
  const titleOfTasksContent = "Lista zadań";

  const formButtonsRenderData = useFormButtonsRenderData();
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
