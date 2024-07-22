import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { Header } from "../../../common/HeaderContent/styled"
import { Input } from "../TasksPage/Form/styled"
import { queryKey } from "../queryKey"

export const Search = ({ title }) => {
    const history = useHistory();
    const location = useLocation();

    const query = (new URLSearchParams(location.search)).get(queryKey);

    const onInputChange = ({ target }) => {
        const inputValueTrimmed = target.value.trim();
        const searchParams = new URLSearchParams(location.search);

        !inputValueTrimmed ?
            searchParams.delete(queryKey) :
            searchParams.set(queryKey, inputValueTrimmed);

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <>
            <Header>{title}</Header>
            <Input
                onChange={onInputChange}
                value={query || ""}
            />
        </>
    )
}