import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "@/app/StoreProvider";
import {Profile} from "../../types/profile.ts";



export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async(_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile')
            return response.data;
        }
        catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error')
        }
    }
)