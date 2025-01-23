import {StateSchema} from "./StateSchema.ts";
import {combineReducers, configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "@/features/AuthByUsername/model/slice/LoginSlice.ts";

import { profileReducer } from "@/entities/Profile/index.ts";
import { userReducer } from "@/entities/User/model/slice/userSlice.ts";
import {$api} from "@/shared/api/api.ts";
import {NavigateOptions, To} from "react-router-dom";
import { articleReducer } from "@/entities/Article/model/slice/ArticleDetailsSlice.ts";
import {ArticleDetailsPageSchema} from "@/pages/ArticleDetailsPage";
import {articleDetailsCommentReducer} from "@/pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice.ts";

export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void )  {

    const rootReducer: ReducersMapObject<StateSchema> = combineReducers({
        user:   userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        article:  articleReducer,
        articleComments: articleDetailsCommentReducer
    });


    const store = configureStore<StateSchema>({
        reducer: rootReducer as ReducersMapObject<StateSchema>,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        middleware: getDefaultMiddleware => getDefaultMiddleware( {
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    });

    return store;
}