import axios from "./axios"

export const initAlbums = async () => {
    const { data } = await axios.get('/albums');

    return data;
}