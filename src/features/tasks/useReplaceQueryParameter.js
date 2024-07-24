import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    const replaceQueryParameter = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        !value ?
            searchParams.delete(key) :
            searchParams.set(key, value.trim());

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};