import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './CommentCard.module.scss'
import {Comment} from "../../model/types/comment.ts";
import Avatar from "@/shared/ui/Avatar/Avatar.tsx";
import {Text} from "@/shared/ui/Text/Text.tsx";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";


interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean
}

export const CommentCard = ({className, comment, isLoading}: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <header className={cls.headerComment}>
                    <Skeleton   width={60} border={"60px"}/>
                    <Skeleton className={cls.headerCommentText} width={120}/>
                </header>
                <Skeleton/>
            </div>
        )
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <header className={cls.headerComment}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={50}/> : null}
                <Text className={cls.headerCommentText} title={comment.user.username}/>
            </header>
            <Text text={comment.text}/>
        </div>
    );
}

export default CommentCard;