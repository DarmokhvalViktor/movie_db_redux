import {FC} from "react";

import {IActor} from "../../../interfaces";
import css from "./Actor.module.css"
import gif from "../../Header/image/pulp-fiction-john-travolta.gif";
import {useAppSelector} from "../../../hooks";

interface IProps {
    actor: IActor
}
const Actor:FC<IProps> = ({actor}) => {
    const {name, character, gender,  profile_path} = actor;
    let genderString;
    if(gender === 2) {
        genderString = "male"
    } else {
        genderString = "female"
    }
    const {theme} = useAppSelector(state => state.theme)

    return (
        <div className={theme ? css.Dark : css.Actor}>
            <div>
                {profile_path ? <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}/> : <img src={gif} alt={"no poster"}/>}
            </div>
            <div className={theme ? css.DarkActorText : css.ActorText}>
                <div>{name}</div>
                <br/>
                <div>character:  <br/> {character}</div>
                <br/>
                <div>gender:  <br/> {genderString}</div>
            </div>

        </div>
    );
};

export {Actor};