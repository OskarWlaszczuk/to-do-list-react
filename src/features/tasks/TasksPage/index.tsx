import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderPanel } from "../../../common/HeaderPanel";
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
          <HeaderPanel
            title="Dodaj nowe zadanie"
            buttonsRenderData={formButtonsRenderData}
          />
        }
        body={<Form />}
      />
      <Section
        title={
          <HeaderPanel
            title={titleOfTasksContent}
            buttonsRenderData={tasksListButtonsRenderData}
          />
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
