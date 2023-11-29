import {NavLink} from "react-router-dom";

// import css from "./Header.module.css"
import css from "./Header.module.css"
import gif from "./image/sticker.gif"
import ControlledSwitches from "./ThemeSwitcher";
import {useAppSelector} from "../../hooks";

const Header = () => {

    const clickToRick = () => {
        window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    }

    const {theme} = useAppSelector(state => state.theme)
    return (
        <div className={(theme) ? css.Dark : css.Header}>

            <h2 className={css.Title}>The Movie App</h2>

            <div className={css.Middle}>
                <NavLink to={"search/:keyword"}>
                    <h1 className={css.MidEl}>Search</h1>
                </NavLink>
                <NavLink to={"movies"}>
                    <h1 className={css.MidEl}>Movies</h1>
                </NavLink>
                <NavLink to={"genres/:genre"}>
                    <h1 className={css.MidEl}>Genres</h1>
                </NavLink>
            </div>

            <div id={"darkThemeSwitcher"}>
                <ControlledSwitches/>
            </div>

            <div id={"Steve"} className={`${css.Profile}`} onClick={clickToRick}>
                <h5>Steve Rambo</h5>
                <img src={gif} alt={"profile_picture"}/>
            </div>
        </div>
    );
};

export {Header};