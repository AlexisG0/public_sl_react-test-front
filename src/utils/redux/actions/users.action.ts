import { createAsyncThunk } from "@reduxjs/toolkit"
import { initUsers } from "../../services/users.services"

export const initListUsers = createAsyncThunk(
    'users/initUsers',
    async (_, { rejectWithValue }) => {
        try {
            return await initUsers();
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)