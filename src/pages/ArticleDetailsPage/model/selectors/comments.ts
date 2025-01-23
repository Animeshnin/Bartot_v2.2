import {StateSchema} from "@/app/StoreProvider";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleComments?.error
