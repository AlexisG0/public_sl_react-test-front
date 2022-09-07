import { createSlice } from "@reduxjs/toolkit"
import { Album } from "../../../interfaces/album";
import { initListAlbums } from "../actions/albums.action";

interface AlbumState {
    list: Album[];
    error: string | null;
}

const initialState: AlbumState = {
    list: [],
    error: null
}

const { reducer } = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initListAlbums.fulfilled, (state, { payload }) => {
            state.list = payload;
        })
    }
})

export default reducer;
