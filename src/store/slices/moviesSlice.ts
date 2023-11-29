import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {Genres, IActor, IGenre, IMovieData, IMovieInfo} from "../../interfaces";
import {actorsService, genresService, movieService} from "../../services";


interface IState {
    movies: IMovieInfo[],
    chosenMovie: IMovieInfo,
    maxPages: number,
    genres: IGenre[],
    actors: IActor[],
    error: boolean,
    isLoading: boolean
}

const initialState: IState = {
    movies: null,
    chosenMovie: null,
    maxPages: null,
    genres: null,
    actors: null,
    error: null,
    isLoading: null
}

const getMovieById = createAsyncThunk<IMovieInfo, { id: number }>(
    "moviesSlice/getMovieById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const getAllMovies = createAsyncThunk<IMovieData, { page: string }>(
    "moviesSlice/getAllMovies",
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IMovieData, { genre: string, page: string }>(
    "moviesSlice/getMoviesByGenre",
    async ({genre, page}, {rejectWithValue}) => {
        try {
            if (genre === "") {
                const {data} = await movieService.getAll();
                return data;
            } else {
                const {data} = await movieService.getByGenre(genre, page);
                return data;
            }
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)

const getMoviesByKeyword = createAsyncThunk<IMovieData, { keyword: string, page: string }>(
    "moviesSlice/getMoviesByKeyword",
    async ({keyword, page}, {rejectWithValue}) => {
        try {
            if (keyword === ":keyword") {
                const {data} = await movieService.getAll(page);
                return data;
            } else {
                const {data} = await movieService.getByKeyword(keyword, page);
                return data;
            }
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getGenres = createAsyncThunk<Genres, void>(
    "moviesSlice/getGenres",
    async(_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getActors = createAsyncThunk<IActor[], {id:number}>(
    "moviesSlice/getActors",
    async({id}, {rejectWithValue}) => {
        try {
            const {data} = await actorsService.getAll(id);
            return data.cast
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.chosenMovie = action.payload;
                state.isLoading = false;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getActors.fulfilled, (state, action) => {
                state.actors = action.payload;
            })
            .addMatcher(isFulfilled(getAllMovies, getMoviesByGenre, getMoviesByKeyword), (state, action) => {
                state.movies = action.payload.results;
                state.maxPages = action.payload.total_pages > 500 ? 500 : action.payload.total_pages;
                state.chosenMovie = null;
                state.error = false;
                state.isLoading = false;
            })
            .addMatcher(isRejected(getMoviesByGenre, getMoviesByKeyword, getMovieById,
                getAllMovies, getGenres, getActors), (state) => {
                state.error = true;
                state.isLoading = false;
            })
            .addMatcher(isPending(getMoviesByGenre, getMoviesByKeyword, getMovieById,
                getAllMovies, getGenres), (state) => {
                state.isLoading = true;
            })
})

const {reducer: moviesReducer, actions} = moviesSlice;
const moviesActions = {
    ...actions,
    getMovieById,
    getAllMovies,
    getMoviesByGenre,
    getMoviesByKeyword,
    getGenres,
    getActors
}

export {
    moviesReducer,
    moviesActions
}