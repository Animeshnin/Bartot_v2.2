import {LoginShema} from "@/features/AuthByUsername/model/types/LoginShema.ts";
import {UserSchema} from "@/entities/User/model/types/user.ts";
import {ProfileSchema} from "@/entities/Profile";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router-dom";
import {ArticleSchema} from "@/entities/Article";
import {ArticleDetailsPageSchema} from "@/pages/ArticleDetailsPage";

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginShema,
    profile?: ProfileSchema,
    article: ArticleSchema,
    articleComments: ArticleDetailsPageSchema,
}


export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T>{
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema

}