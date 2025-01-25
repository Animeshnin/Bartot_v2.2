import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "@/app/StoreProvider";
import {Comment} from "@/entities/Comment";


export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'article/fetchCommentsByArticleId',
    async(articleId, thunkAPI) => {

        if(!articleId) {
            return thunkAPI.rejectWithValue('error')
        }

        try {
            const response = await thunkAPI.extra.api.get<Comment[]>(`/comments/`,
                {
                    params: {
                        articleId,
                        _expand: 'user'
                    }
                })

            return response.data;
        }
        catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error')
        }
    }
)