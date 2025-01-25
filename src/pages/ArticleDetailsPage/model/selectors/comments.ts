import {StateSchema} from "@/app/StoreProvider";

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleComments?.error
