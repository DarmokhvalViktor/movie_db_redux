import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MoviesPage, SearchPage} from "./pages";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {SearchResultsPage} from "./pages";
import {ChosenGenre} from "./pages/ChosenGenre";

const router = createBrowserRouter([
    {path:"", element:<MainLayout/>, children:[
            {index: true, element:<Navigate to={"movies"}/>},
            {path: "movies", element:<MoviesPage/>},
            {path: ":movieName", element:<MovieInfoPage/>},
            {path: "genres", element:<GenresPage/>, children:[
                    {path: ":genreId", element:<ChosenGenre/>}
                ]},
            {path: "search", element:<SearchPage/>, children:[
                    {path: ":keyword", element: <SearchResultsPage/>}
                ]}
        ]}
])

export {
    router
}