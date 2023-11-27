import {SetURLSearchParams} from "react-router-dom";
import {FC} from "react";

import {Movie} from "./Movie";
import css from "./Movies.module.css"
import {useAppSelector} from "../../hooks";

interface IProps {
    page: string,
    setQuery: SetURLSearchParams,
}

const Movies: FC<IProps> = ({page, setQuery}) => {

    const {maxPages, movies} = useAppSelector(state => state.movies)

    const previous = (): void => {
        setQuery({page: `${+page - 1}`})
    }

    const next = (): void => {
        setQuery({page: `${+page + 1}`})
    }

    const firstPage = (): void => {
        setQuery({page: `1`})
    }

    const pageNumber: number = +page

    return (
        <div>
            <div className={css.Buttons}>
                <button disabled={pageNumber <= 1}
                        onClick={previous}>{ pageNumber > 1 ? `Back to page ${pageNumber - 1}` : "On first page" }</button>
                <div id={"pageCounter"}>{`page: ${pageNumber} of ${maxPages}`}</div>

                <button disabled={pageNumber === 1} onClick={firstPage}>First Page</button>

                <button disabled={pageNumber >= (maxPages > 500 ? 500: maxPages)}
                        onClick={next}>{pageNumber !== (maxPages > 500 ? 500: maxPages) ? `Forward to page ${pageNumber + 1}` : "On last page"}</button>
            </div>
            <div className={css.Movies}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};