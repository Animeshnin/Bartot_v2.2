import {Article} from "./type.ts";

export interface ArticleSchema {
    isLoading?: boolean;
    error?: string;
    data?: Article
}