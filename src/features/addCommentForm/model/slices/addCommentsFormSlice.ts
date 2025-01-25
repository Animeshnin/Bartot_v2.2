import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddCommentFormSchema} from "../types/addCommentsFormSchema.ts";

const initialState: AddCommentFormSchema = {
    text: "",
}

export const addCommentsFormSlice = createSlice({
    name: 'addCommentsForm',
    initialState,
    reducers: {
        SetText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false
    //
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload;
    //         })
    // }
})


export const { actions: addCommentsFormActions} = addCommentsFormSlice;
export const { reducer: addCommentsFormReducer} = addCommentsFormSlice;
