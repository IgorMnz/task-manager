import React, {lazy} from "react";

const Main = lazy(() => import("../components/pages/main-page/MainPage"))
const Custom = lazy(() => import("../components/pages/page-401/Page401"))


interface IRoute {
    path: string
    component: React.ComponentType
}

export enum RouteNames {
    MAIN = '/',
    CUSTOM = '/custom',
    NAVIGATE = '*'
}

export const routes: IRoute[] = [
    {path: RouteNames.MAIN, component: Main},
    {path: RouteNames.CUSTOM, component: Custom}
]

