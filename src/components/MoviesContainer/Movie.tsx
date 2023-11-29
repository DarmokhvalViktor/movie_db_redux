import {FC, useState} from "react";
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IMovieInfo} from "../../interfaces";
import css from "./Movie.module.css"
import "./Movie.module.css"
import gif from "../Header/image/pulp-fiction-john-travolta.gif";
import {useAppSelector} from "../../hooks";

interface IProps {
    movie: IMovieInfo
}
const Movie:FC<IProps> = ({movie}) => {
    const {id, title, vote_average,  poster_path} = movie;

    const navigate = useNavigate();

    const toMovie = () => {
        navigate(`/${title}`, {state: {id}})
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const {theme} = useAppSelector(state => state.theme)

    return (
        <div className={theme ? css.DarkMovie : css.Movie} id={"container"} onClick={toMovie}>
            {poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/> : <img src={gif} alt={"no poster"}/>}
            <div id={"movieTitle"}>{title}</div>

            <div id={"starRating"} onMouseEnter={togglePopup} onMouseLeave={togglePopup}>
                <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} readOnly/>
                { isPopupOpen &&
                    (<div>
                        <span> Rating: {vote_average}</span>
                    </div>)
                }
            </div>


        </div>
    );
};

export {Movie};