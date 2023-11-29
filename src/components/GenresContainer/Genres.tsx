import {useState} from "react";

import {Genre} from "./Genre";
import css from "./Genres.module.css"
import {useAppSelector} from "../../hooks";


const Genres = () => {

    //This useState sees if user click on genre, and display name of genre afterwards
    const [chosenGenre, setChosenGenre] = useState<string>(null)

    const {genres} = useAppSelector(state => state.movies);

    const {theme} = useAppSelector(state => state.theme)

    return (
        <div>
        {/*TODO change appearance*/}
        <div className={theme ? css.Dark : css.Light}>
            {genres&& genres.map(genre => <Genre key={genre.id} genre={genre} setChosenGenre={setChosenGenre}/>)}
        </div>
            {chosenGenre && <h1 className={theme ? css.DarkChosenGenre : css.ChosenGenre}>Chosen genre: {chosenGenre} </h1>}
        </div>
    );
};

export {Genres};