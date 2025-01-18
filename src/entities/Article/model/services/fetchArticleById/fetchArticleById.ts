import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "@/app/StoreProvider";
import {Article} from "../../type/type";



export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async(articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`)
            return response.data;
        }
        catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error')
        }
    }
)