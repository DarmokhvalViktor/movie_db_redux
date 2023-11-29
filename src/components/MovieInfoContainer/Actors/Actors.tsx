import {Actor} from "./Actor";
import css from "./Actors.module.css"
import {useAppSelector} from "../../../hooks";

const Actors = () => {

    const {actors} = useAppSelector(state => state.movies)
    const {theme} = useAppSelector(state => state.theme)

    return (
        <div>
            <h1 className={theme ? css.DarkH1 : ""}>Actors:</h1>
        <div className={theme ? css.Dark : css.Actors}>

            {actors && actors.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </div>
        </div>
    );
};

export {Actors};