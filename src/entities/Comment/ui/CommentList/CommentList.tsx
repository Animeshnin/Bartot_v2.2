import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './CommentList.module.scss'
import CommentCard from "../../ui/CommentCard/CommentCard.tsx";
import {Text} from "@/shared/ui/Text/Text.tsx";
import {Comment} from "../../model/types/comment.ts";

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({className, comments, isLoading}: CommentListProps) => {
    console.log(comments);
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length > 0
                ?
                comments.map((comment: Comment) => (
                    <CommentCard isLoading={isLoading} comment={comment}/>
                ))
                :
                <Text text={'Комментарии отстуствуют'}/>
            }
        </div>
    );
}

export default CommentList;