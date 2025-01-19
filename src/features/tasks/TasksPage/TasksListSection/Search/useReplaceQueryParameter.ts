import { useHistory, useLocation } from "react-router-dom";
import { QUERY_KEY } from "../../../../../common/constants/QUERY_KEY";

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    interface QueryParams {
        key: typeof QUERY_KEY;
        value: string;
    }

    const replaceQueryParameter = ({ key, value }: QueryParams) => {
        const searchParams = new URLSearchParams(location.search);

        !value ?
            searchParams.delete(key) :
            searchParams.set(key, value);

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};