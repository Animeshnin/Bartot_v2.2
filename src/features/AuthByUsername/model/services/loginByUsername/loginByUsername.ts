import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/entities/User/model/types/user.ts";
import {userActions} from "@/entities/User/model/slice/userSlice.ts";
import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage.ts";
import {ThunkExtraArg} from "@/app/StoreProvider";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string, extra: ThunkExtraArg}>(
    'login/loginByUsername',
    async({username, password}, thunkAPI) => {
        try {

            const response = await thunkAPI.extra.api.post('/login', {username, password})

            if(!response.data){
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            thunkAPI.extra.navigate('/about')
            return response.data;
        }
        catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error')
        }
    }
)