import {classNames} from "@/shared/lib/classNames/classNames.ts";
import'./PageLoader.scss'
interface PageLoaderProps {
    className?: string;
}

export const PageLoader =({className}: PageLoaderProps) => {
    return (
        <div className={classNames('PageLoader', {}, [className!])}>
            <div className="loadingio-spinner-bean-eater-nq4q5u6dq7r">
                <div className="ldio-x2uulkbinbj">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageLoader;