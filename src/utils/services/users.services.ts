import axios from "./axios"

export const initUsers = async () => {
    const { data } = await axios.get('/users');

    return data;
}