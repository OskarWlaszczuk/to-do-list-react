import { useLocation } from "react-router-dom";
import { QueryKey } from "../../../common/aliases/types/QueryKey";

export const useQueryParameter = (queryKey:QueryKey) => {
    const location = useLocation();
    const queryValue = (new URLSearchParams(location.search)).get(queryKey);

    return queryValue;
};