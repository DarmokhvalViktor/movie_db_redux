import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movies} from "../components";
import {useAppDispatch} from "../hooks";
import {moviesActions} from "../store";


const MoviesPage = () => {

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"
    const dispatch = useAppDispatch();



    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page}))
    }, [page, dispatch])

    return (
        <div className={"MoviesPage"} >
            <Movies page={page} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesPage};