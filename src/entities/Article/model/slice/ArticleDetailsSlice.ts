
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArticleSchema} from "../type/ArticleSchema.ts";
import {Article} from "../type/type.ts";
import {fetchArticleById} from "../services/fetchArticleById/fetchArticleById.ts";

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
}




export const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload;
            })
    }
})

export const { actions: articleActions} = articleDetailsSlice;
export const { reducer: articleReducer} = articleDetailsSlice;
