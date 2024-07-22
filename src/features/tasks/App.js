import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { TasksPage } from './TasksPage';
import { AuthorPage } from '../AuthorPage';
import Section from '../../common/Section';
import { TaskContentPage } from './TaskContentPage';
import { StyledNavLink } from './styled';

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink activeClassName="yolo" to="/tasks" >Lista zadań</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink activeClassName="yolo" to="/author" >Autor</StyledNavLink>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/tasks/:id" >
                <Section body={<TaskContentPage title="Szczegóły zadania" />} />
            </Route>
            <Route path="/tasks" >
                <TasksPage />
            </Route>
            <Route path="/author">
                {/* Dodać Header wewnątrz Section */}
                <Section body={<AuthorPage title="O autorze" />} />
            </Route>
            <Route path="/">
                <Redirect to="/tasks" />
            </Route>
        </Switch>
    </HashRouter>
);