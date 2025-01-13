import { Content, ItemWrapper, Item } from "./styled";
import { selectTasks, selectIsTasksListEmpty, selectTasksLength, selectImportantTasksLength } from "../../tasksSlice";
import { SectionHeader } from "../../../../common/SectionHeader";
import { useAppSelector } from "../../../../reduxTypedHooks";

const Stats = () => {
    const tasks = useAppSelector(selectTasks)
    const tasksLenght = useAppSelector(selectTasksLength)
    const importantTasksLength = useAppSelector(selectImportantTasksLength);
    const isTasksEmpty = useAppSelector(selectIsTasksListEmpty);

    const statsRenderData = [
        {
            description: "Liczba wszystkich zadań",
            result: tasksLenght,
        },
        {
            description: "Liczba ważnych zadań",
            result:importantTasksLength,
        },
        {
            description: "Procent ukończonych zadań",
            result: <>{((tasks.filter(({ done }) => done).length / tasksLenght) * 100).toFixed(0)}%</>,
        },
    ]

    return (
        <>
            {
                !isTasksEmpty && (
                    <Content>
                        <SectionHeader $spaceAround>Dane zadań 📊</SectionHeader>
                        <ItemWrapper>
                            {
                                statsRenderData.map(({ description, result }) => (
                                    <Item >{description}: <b>{result}</b></Item>
                                ))
                            }
                        </ItemWrapper>
                    </Content>
                )
            }
        </>
    );
};

export default Stats;