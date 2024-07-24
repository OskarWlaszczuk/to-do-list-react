import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = queryKey => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(queryKey);

    return query;
};