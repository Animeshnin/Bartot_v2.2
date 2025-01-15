import {JSX} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User/selectors/getUserAuthData/getUserAuthData.ts";
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router-dom";
import { RouterPath} from "@/shared/config/routeConfig/routeConfig.tsx";

export function RequireAuth({children}: {children: JSX.Element}) {
    const authData = useSelector(getUserAuthData)
    const location = useLocation();

    if(!authData){

        return <Navigate to={RouterPath.about} state={{from: location}} replace />
    }

    return children
}