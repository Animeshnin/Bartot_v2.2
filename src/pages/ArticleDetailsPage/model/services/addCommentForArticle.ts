import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "@/app/StoreProvider";
import {Comment} from "@/entities/Comment";



import {getUserAuthData} from "@/entities/User";
import {getArticleDetailsData} from "@/entities/Article";
import {addCommentsFormActions} from "@/features/addCommentForm/model/slices/addCommentsFormSlice.ts";
import {fetchCommentsByArticleId} from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId.ts";






export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetailsPage/addCommentForArticle',
    async(text, thunkAPI) => {

        console.log('123')
        const {getState, dispatch } = thunkAPI;

        const userData = getUserAuthData(getState())
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
            dispatch(addCommentsFormActions.SetText(''))
            dispatch(fetchCommentsByArticleId(article.id))
            return response.data
        }
        catch (e) {
            console.log('asdasd')

            console.error(e);
            return thunkAPI.rejectWithValue('error')
        }

    },
)


