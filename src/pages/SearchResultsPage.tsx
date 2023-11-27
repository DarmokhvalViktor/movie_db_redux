import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";


import {Movies} from "../components";
import {useAppDispatch} from "../hooks";
import {moviesActions} from "../store";

const SearchResultsPage = () => {

    const {keyword} = useParams<string>();

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMoviesByKeyword({keyword, page}));
    }, [page, keyword, dispatch])

    return (
        <div>
            <Movies setQuery={setQuery} page={page}/>
        </div>
    );
};

export {SearchResultsPage};