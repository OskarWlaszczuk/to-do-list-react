import { Content, ItemWrapper, Item } from "./styled";
import { selectIsTasksListEmpty, selectTasksLength, selectImportantTasksLength, selectDoneTasksLength } from "../../tasksSlice";
import { SectionHeader } from "../../../../common/SectionHeader";
import { useAppSelector } from "../../../../reduxTypedHooks";

const Stats = () => {
    const isTasksEmpty = useAppSelector(selectIsTasksListEmpty);

    const tasksLenght = useAppSelector(selectTasksLength)
    const importantTasksLength = useAppSelector(selectImportantTasksLength);
    const doneTasksLength = useAppSelector(selectDoneTasksLength);

    const statsRenderData = [
        {
            description: "Liczba wszystkich zadań",
            result: tasksLenght,
        },
        {
            description: "Liczba ważnych zadań",
            result: importantTasksLength,
        },
        {
            description: "Procent ukończonych zadań",
            result: <>{((doneTasksLength / tasksLenght) * 100).toFixed(0)}%</>,
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