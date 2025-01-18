import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { TasksPage } from '../../features/tasks/TasksPage';
import { TaskContentPage } from './TaskContentPage';
import { AuthorPage } from '../../features/author/AuthorPage';

export const App = () => (
    <HashRouter>
        <NavigationBar />
        <Switch>
            <Route path="/tasks/:id" >
                <TaskContentPage />
            </Route>
            <Route path="/tasks" >
                <TasksPage />
            </Route>
            <Route path="/author">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/tasks" />
            </Route>
        </Switch>
    </HashRouter>
);