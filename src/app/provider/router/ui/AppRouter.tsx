import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {AppRoutesProps, routerConfig} from "@/shared/config/routeConfig/routeConfig.tsx";
import PageLoader from "@/widgets/PageLoader/ui/PageLoader.tsx";
import {RequireAuth} from "@/app/provider/router/ui/RequireAuth.tsx";

function  AppRouter() {
    const renderWithWrapper = (routes: AppRoutesProps) => {


        const element = (
            <Suspense fallback={<PageLoader/>}>
                <div className={"page-container"}>
                    {routes.element}
                </div>
            </Suspense>
        )
        return (

            <Route key={routes.path} path={routes.path}
                   element={routes.authOnly ?
                       (<RequireAuth>{element}</RequireAuth>)
                       :
                       element}/>
        )
    }

    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    )


}

export default AppRouter;