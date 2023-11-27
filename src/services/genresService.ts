import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {Genres} from "../interfaces";
import {IRes} from "../types";



const genresService = {
    getAll:():IRes<Genres> => axiosService.get(urls.genres)
}

export {
    genresService
}