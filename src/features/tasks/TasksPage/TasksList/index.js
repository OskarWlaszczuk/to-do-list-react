import { useSelector, useDispatch } from "react-redux";
import { selectTaskByQuery, selectHideDoneTasks } from "../../tasksSlice";
import { toggleTaskDone, removeTask, toggleImportantContent } from "../../tasksSlice";
import { List, Item, Button, ToggleDoneButton, Content, ButtonsBar, ButtonsBarItem } from "./styled";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDoneTasks = useSelector(selectHideDoneTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(({ id, done, content, important }) => {
        return (
          (!hideDoneTasks || (hideDoneTasks && !done)) && (
            <Item key={id}>
              <ButtonsBar>
                <ButtonsBarItem
                  title="Ustaw, jako ważne"
                  disabled={done}
                  $activated={important && !done}
                  onClick={() => dispatch(toggleImportantContent(id))}
                >
                  B
                </ButtonsBarItem>
              </ButtonsBar>
              <ToggleDoneButton
                onClick={() => dispatch(toggleTaskDone(id))}
              >
                {done ? "✔" : ""}
              </ToggleDoneButton>
              <Content
                $justified={content.length > 200 ? true : false}
                $important={important && !done}
                $donedItem={done}>
                <Link to={`/tasks/${id}`} >
                  {content}
                </Link>
              </Content>
              <Button
                onClick={() => dispatch(removeTask(id))}
              >
                🗑️
              </Button>
            </Item>
          )
        );
      })}
    </List>
  );
};

export default TasksList;
