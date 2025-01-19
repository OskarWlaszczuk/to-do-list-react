import { QUERY_KEY } from "../../../../../common/constants/QUERY_KEY"
import { useQueryParameter } from "../../../../../common/hooks/useQueryParameter"
import { useReplaceQueryParameter } from "./useReplaceQueryParameter"
import { Img, Wrapper } from "./styled"
import { SearchInput } from "../../../../../common/components/Input"
import { selectIsTasksListEmpty } from "../../../tasksSlice"
import { useSelector } from "react-redux"

export const Search = () => {
    const isTasksEmpty = useSelector(selectIsTasksListEmpty);
    const query = useQueryParameter(QUERY_KEY);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        replaceQueryParameter({
            key: QUERY_KEY,
            value: target.value,
        });
    };

    return (
        <>
            {
                !isTasksEmpty && (
                    <Wrapper>
                        <Img src="https://cdn-icons-png.flaticon.com/512/1167/1167092.png" alt="img" />
                        <SearchInput
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