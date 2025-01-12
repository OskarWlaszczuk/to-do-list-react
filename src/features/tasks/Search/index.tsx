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

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        replaceQueryParameter({
            key: queryKey,
            value: target.value,
        });
    };

    return (
        <>
            {
                !isTasksEmpty && (
                    <Wrapper>
                        <Img src="https://cdn-icons-png.flaticon.com/512/1167/1167092.png" alt="img" />
                        <Input
                            $filterInput
                            name="searchTaskField"
                            onChange={onInputChange}
                            value={query || ""}
                            placeholder="Szukaj zadania"
                        />
                    </Wrapper>
                )
            }
        </>
    );
};