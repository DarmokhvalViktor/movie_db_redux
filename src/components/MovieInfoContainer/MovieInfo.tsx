import {FC, useEffect} from "react";
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import css from "./MovieInfo.module.css"
import "./MovieInfo.module.css"
import {IMovieInfo} from "../../interfaces";
import gif from "../Header/image/pulp-fiction-john-travolta.gif"
import {Actors} from "./Actors";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";

interface IProps {
    movie: IMovieInfo
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {
        adult, original_language, overview,
        title, release_date, vote_average, vote_count, poster_path,
        runtime, genres, tagline, id
    } = movie

    const navigate = useNavigate();

    const goTo = (id: string) => {
        navigate(`/genres/${id}`)
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getActors({id}))
    }, [id, dispatch])

    const {theme} = useAppSelector(state => state.theme)

    return (
        <div>
            <div className={theme ? css.DarkMovieInfo : css.MovieInfo} id={"movieInfoContainer"}>
                {poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/> :
                    <img src={gif} alt={"no poster"}/>}


                <div className={theme ? css.DarkWrapBlock : css.wrapBlock} id={"wrapBlock"}>
                    {adult && <div>adult: {adult}</div>}
                    {title && <div>{title}</div>}
                    {genres.length ? <div className={theme ? css.DarkGenresBlock : css.genresBlock}>
                        {genres.map(genre => (
                                <div className={theme ? css.DarkGenreInfo : css.genreInfo} id={"genreInfo"} key={genre.id}
                                     onClick={() => goTo(`${genre.id}`)}>{genre.name}</div>
                            )
                        )}
                    </div> : ""}
                    {original_language && <div>Original Language: <br/> {original_language}</div>}
                    {overview && <div>{overview}</div>}
                    {release_date && <div>Release Date: <br/> {release_date}</div>}
                    {vote_average && <div>
                        <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} readOnly/>
                    </div>}
                    {vote_count && <div>Vote count: <br/> {vote_count}</div>}
                    {runtime && <div>Runtime: <br/> {runtime} minutes</div>}
                    {tagline && <div>Tagline: <br/> {tagline}</div>}
                </div>

            </div>
            <Actors/>
        </div>


    );
};

export {MovieInfo};