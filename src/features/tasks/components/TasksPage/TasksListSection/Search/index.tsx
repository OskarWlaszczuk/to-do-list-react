import { queryKey } from "../../../../../../common/constants/queryKey"
import { useQueryParameter } from "../../../../../../common/hooks/useQueryParameter"
import { useReplaceQueryParameter } from "../../../../hooks/useReplaceQueryParameter"
import { Img, Wrapper } from "./styled"
import { Input } from "../../../../../../common/components/Input"
import { selectIsTasksListEmpty } from "../../../../slices/tasksSlice"
import { useSelector } from "react-redux"

export const Search = () => {
    const isTasksEmpty = useSelector(selectIsTasksListEmpty);
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
                            $searchInput
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