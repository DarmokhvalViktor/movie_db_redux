import {Actor} from "./Actor";
import css from "./Actors.module.css"
import {useAppSelector} from "../../../hooks";

const Actors = () => {

    const {actors} = useAppSelector(state => state.movies)

    return (
        <div>
            <h1>Actors:</h1>
        <div className={css.Actors}>

            {actors && actors.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </div>
        </div>
    );
};

export {Actors};