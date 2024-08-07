import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { TasksPage } from './TasksPage';
import { AuthorPage } from '../author';
import { TaskContentPage } from './TaskContentPage';
import { NavigationBar } from '../../common/NavigationBar';

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