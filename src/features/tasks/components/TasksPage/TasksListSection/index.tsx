import { HeaderPanel } from "../../../../../common/components/HeaderPanel"
import Section from "../../../../../common/components/Section"
import { Search } from "./Search"
import { useTasksListButtonsRenderData } from "../../../hooks/useTasksListButtonsRenderData"
import ListContent from "./ListContent"
import Stats from "./Stats"

export const TasksListSection = () => {
    const tasksListButtonsRenderData = useTasksListButtonsRenderData();

    return (
        <>
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
                        <ListContent />
                    </>
                }
            />
        </>
    );
};