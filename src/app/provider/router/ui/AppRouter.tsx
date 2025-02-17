import  { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {AppRoutesProps, routerConfig} from "@/shared/config/routeConfig/routeConfig.tsx";
import { RequireAuth } from './RequireAuth';
import { PageLoader } from '@/widgets/PageLoader';


const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-container">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
