import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import "./Genre.css"
import {useAppSelector} from "../../hooks";

interface IProps {
    genre: IGenre,
    setChosenGenre: (setChosenGenre: string) => void
}

const Genre: FC<IProps> = ({genre, setChosenGenre}) => {

    const {id: genreId, name} = genre;
    const navigate = useNavigate();


    // const [state, setState] = useState(false);
    const {theme} = useAppSelector(state => state.theme)
    const themeFromLocal = localStorage.getItem("theme")

    function searchGenre() {
        navigate(`${genreId}`)
        setChosenGenre(name)
    }

    return (
        <div className={(theme && themeFromLocal) ? "DarkGenre" : "LightGenre"} onClick={searchGenre}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};