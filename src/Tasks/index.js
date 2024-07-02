import { List, Item, Button, ToggleDoneButton, Content } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTasks, toggleTasksDone }) => {
    return (
        <List>
            {
                tasks.map(({ id, done, content }) => {
                    return (!hideDoneTasks || (hideDoneTasks && !done)) &&
                        (
                            <Item key={id}>
                                <ToggleDoneButton onClick={() => toggleTasksDone(id)}>{done ? "✔" : ""}</ToggleDoneButton>
                                <Content $donedItem={done}>{content}</Content>
                                <Button onClick={() => removeTasks(id)}>🗑️</Button>
                            </Item>
                        );
                })
            }
        </List>
    )
}

export default Tasks;