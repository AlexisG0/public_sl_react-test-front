import { createAsyncThunk } from "@reduxjs/toolkit"
import { initAlbums } from "../../services/albums.services";

export const initListAlbums = createAsyncThunk(
    'albums/initAlbums',
    async (_, { rejectWithValue }) => {
        try {
            return await initAlbums();
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)