import { HeaderPanel } from "../../../../common/HeaderPanel"
import Section from "../../../../common/Section"
import { Search } from "../../Search"
import { useTasksListButtonsRenderData } from "../hooks/useTasksListButtonsRenderData"
import ListContent from "../ListContent"
import Stats from "../Stats"

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
    )
}