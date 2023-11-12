import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css"

interface IProps {
    genre: IGenre,
    setChosenGenre: (setChosenGenre: string) => void
}
const Genre:FC<IProps> = ({genre, setChosenGenre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

    function searchGenre() {
        navigate(`${id}`)
        setChosenGenre(name)
    }

    return (
        <div className={`${css.Genre} genre`} onClick={searchGenre}>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {Genre};