import { api } from "./UrlBase";


export const GetMovie = async () => {
    try {
        const movie = await api.get("?apikey=16872407&s=hulk");

        return movie.data.Search;
    } catch (error) {
        alert(error);
    }
}