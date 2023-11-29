import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from "./SearchForm.module.css"
import {useAppSelector} from "../../hooks";

interface IKeyword {
    keyword: string
}

const SearchForm= () => {

    const {reset, register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const search = (searchKeyword:IKeyword) => {
        const keyword = searchKeyword.keyword
        navigate(`${keyword}`)
        reset()
    }

    const {theme} = useAppSelector(state => state.theme)
    return (
        <form className={theme ? css.DarkSearchForm : css.SearchForm} onSubmit={handleSubmit(search)}>
            <input type={"text"} placeholder={"keyword"} {...register("keyword")}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};