import Section from "../../../common/Section";
import { HeaderPanel } from "../../../common/HeaderPanel";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
import { useTasksListButtonsRenderData } from "./hooks/useTasksListButtonsRenderData";
import { FormSection } from "./FormSection";

export function TasksPage() {

  const tasksListButtonsRenderData = useTasksListButtonsRenderData();

  return (
    <>
      <FormSection />
      <Section
        title={
          <HeaderPanel
            title={"Lista zadań"}
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
