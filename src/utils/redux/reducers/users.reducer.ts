import { createSlice } from "@reduxjs/toolkit"
import { RawUser } from "../../../interfaces/user";
import { initListUsers } from "../actions/users.action"

interface UsersState {
    list: RawUser[];
    error: string | null;
}

const initialState: UsersState = {
    list: [],
    error: null
}

const { reducer } = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initListUsers.fulfilled, (state, { payload }) => {
            state.list = payload;
        })
    }
})

export default reducer;
