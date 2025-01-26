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
})


export const { actions: addCommentsFormActions} = addCommentsFormSlice;
export const { reducer: addCommentsFormReducer} = addCommentsFormSlice;
