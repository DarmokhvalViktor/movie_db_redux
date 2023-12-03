import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {Movies} from "../components";
import {useAppDispatch} from "../hooks";
import {moviesActions} from "../store";

const ChosenGenre = () => {

    const {genreId:genre} = useParams<string>();

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre({genre, page}))
    }, [page, genre, dispatch])

    return (
        <div>
            <Movies page={page} setQuery={setQuery}/>
        </div>
    );
};

export {ChosenGenre};