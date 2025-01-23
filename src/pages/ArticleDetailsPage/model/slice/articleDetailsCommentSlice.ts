import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'

import type {Comment} from '@/entities/Comment'
import {StateSchema} from "@/app/StoreProvider";
import {ArticleDetailsPageSchema} from "@/pages/ArticleDetailsPage";

import {fetchCommentsByArticleId} from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId.ts";


const commentsAdapter = createEntityAdapter<Comment>({
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
    
    selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments  || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsPageSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {}
        }
    ),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload;
            })
    }
})


export const { reducer: articleDetailsCommentReducer} = articleDetailsCommentsSlice;



// type RootState = ReturnType<typeof store.getState>
//
// console.log(store.getState().books)
// // { ids: [], entities: {} }
//
// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books,
// )
//
// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState())