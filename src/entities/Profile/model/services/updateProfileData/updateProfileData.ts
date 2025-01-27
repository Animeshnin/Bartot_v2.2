import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "@/app/StoreProvider";
import {Profile, ValidateProfileError} from "../../types/profile.ts";
import { getProfileForm} from "../../selectors/getProfileForm/getProfileForm.ts";
import {validateProfile} from "../validateProfile/validateProfile.ts";



export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async(_, thunkAPI) => {
        const {extra, getState, rejectWithValue} = thunkAPI;

        const formData = getProfileForm(getState())

        const errors = validateProfile(formData)

        if(errors.length){
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile/' + formData?.id, formData)
            return response.data;
        }
        catch (e) {
            console.error(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)