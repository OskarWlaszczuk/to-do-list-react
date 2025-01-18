import { ItemsWrapper, Item } from "./styled";
import { selectIsTasksListEmpty, selectTasksLength, selectImportantTasksLength, selectDoneTasksLength } from "../../../tasksSlice";
import { SectionHeader } from "../../../../../common/components/SectionHeader";
import { useAppSelector } from "../../../../../common/hooks/reduxTypedHooks";

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
                    <article>
                        <SectionHeader $spaceAround>Dane zadań 📊</SectionHeader>
                        <ItemsWrapper>
                            {
                                statsRenderData.map(({ description, result }, index) => (
                                    <Item key={index}>{description}: <b>{result}</b></Item>
                                ))
                            }
                        </ItemsWrapper>
                    </article>
                )
            }
        </>
    );
};

export default Stats;