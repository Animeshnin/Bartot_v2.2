import {Comment} from "@/entities/Comment";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticleDetailsPageSchema extends EntityState<Comment,
    any>{
    isLoading?: boolean;
    error?: string;

}