import { queryKey } from "../queryKey"
import { useQueryParameter } from "../useQueryParameter"
import { useReplaceQueryParameter } from "../useReplaceQueryParameter"
import { Img, Wrapper } from "./styled"
import { Input } from "../../../common/Input"
import { selectIsTasksEmpty } from "../tasksSlice"
import { useSelector } from "react-redux"

export const Search = () => {
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const query = useQueryParameter(queryKey);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: queryKey,
            value: target.value,
        });
    };

    return (
        !isTasksEmpty && (
            <Wrapper>
                <Img src="https://cdn-icons-png.flaticon.com/128/3839/3839020.png" alt="img" />
                <Input
                    $search
                    name="searchTaskField"
                    onChange={onInputChange}
                    value={query || ""}
                    placeholder="Szukaj zadania"
                />
            </Wrapper>
        )
    );
};