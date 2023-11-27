import {useEffect} from "react";
import {Outlet, useSearchParams} from "react-router-dom";


import {Genres} from "../components";
import {useAppDispatch} from "../hooks";
import {moviesActions} from "../store";

const GenresPage = () => {

        const dispatch = useAppDispatch();
        const [query] = useSearchParams({page: "1"})
        const page = query.get("page") ? query.get("page") : "1"

        useEffect(() => {
                dispatch(moviesActions.getGenres())
        }, [dispatch, page])

        return (
        <div>
                <Genres/>
                <Outlet/>
        </div>
        );
};

export {GenresPage};