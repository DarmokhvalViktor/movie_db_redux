import {useState} from "react";

import {Genre} from "./Genre";
import css from "./Genres.module.css"
import {useAppSelector} from "../../hooks";


const Genres = () => {

    const [chosenGenre, setChosenGenre] = useState<string>(null)

    const {genres} = useAppSelector(state => state.movies);

    const {theme} = useAppSelector(state => state.theme)

    return (
        <div>
        <div className={theme ? css.Dark : css.Light}>
            {genres&& genres.map(genre => <Genre key={genre.id} genre={genre} setChosenGenre={setChosenGenre}/>)}
        </div>
            {chosenGenre && <h1 className={theme ? css.DarkChosenGenre : css.ChosenGenre}>Chosen genre: {chosenGenre} </h1>}
        </div>
    );
};

export {Genres};