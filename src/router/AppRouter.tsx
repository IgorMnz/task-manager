import React, {FC, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Spinner from "../components/common/spinner/Spinner";
import Layout from "../layouts/Layout";
import {RouteNames, routes} from "./Routes";


const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner/>}>
                <Layout>
                    <Routes>
                        {routes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component/>}
                            />
                        )}
                        <Route path={RouteNames.NAVIGATE} element={<Navigate replace to={RouteNames.MAIN}/>}/>
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;