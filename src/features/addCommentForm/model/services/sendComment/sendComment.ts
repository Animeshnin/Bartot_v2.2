import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "@/app/StoreProvider";
import {Comment} from "@/entities/Comment";
import {getUserAuthData} from "@/entities/User";
import {getAddCommentFormText} from "../../selectors/getAddCommentForm.ts";
import {getArticleDetailsData} from "@/entities/Article";



export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'articleComment/sendComment',
    async(authData, thunkAPI, getState) => {

        console.log('123')

        const userData = getUserAuthData(getState())
        const text = getAddCommentFormText(getState())
        const article = getArticleDetailsData(getState())

        if(!userData || !text || !article) {
            return thunkAPI.rejectWithValue('error')
        }

        try {
            const response = await thunkAPI.extra.api.post('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })


            return response.data
        }
        catch (e) {
            console.log('asdasd')

            console.error(e);
            return thunkAPI.rejectWithValue('error')
        }

    }
)