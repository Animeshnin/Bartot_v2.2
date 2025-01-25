import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './AddCommentForm.module.scss'
import Input from "@/shared/ui/Input/Input.tsx";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {addCommentsFormActions} from "../model/slices/addCommentsFormSlice.ts";
import {getAddCommentFormText} from "../model/selectors/getAddCommentForm.ts";
import {sendComment} from "@/features/addCommentForm/model/services/sendComment/sendComment.ts";


interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = ({className}: AddCommentFormProps) => {
    const dispatch = useDispatch();
    const text = useSelector(getAddCommentFormText)
    const onChangeTextComment = useCallback((value: string) => {
        dispatch(addCommentsFormActions.SetText(value));
    }, [dispatch]);



    const onSendComment = useCallback(() => {
        console.log(text);
        dispatch(sendComment)
    }, [dispatch]);
    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
            <Input value={text} onChange={onChangeTextComment} placeholder={'Добавить комментарий>'}/>
            <Button onClick={onSendComment} theme={ButtonTheme.OUTLINE}>Отправить</Button>
        </div>
    );
}

export default AddCommentForm;