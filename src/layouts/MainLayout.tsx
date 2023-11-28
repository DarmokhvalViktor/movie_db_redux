import {Outlet} from "react-router-dom";
import {LinearProgress} from "@mui/material";

import {Header} from "../components";
import {useAppSelector} from "../hooks";
import css from "./MainLayout.module.css"

const MainLayout = () => {
    const {isLoading} = useAppSelector(state => state.movies)

    return (
            <div>
                <Header/>
                {!isLoading ? <div className={css.Loader}></div> : <LinearProgress color={"info"} className={css.Progress}/>}

                <Outlet />
            </div>
    );
};

export {MainLayout};