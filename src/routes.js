import React from "react";
import Loadable from "react-loadable";

// put your routes inside this array.
const routes = [
    {
        name: "Home",
        path: "/home",
        restricted: true,
        authMode: "private",
        exact: true,
        component: Loadable({
            loader: () => import("./containers/Home/Home"),
            loading: () => <div>Loading...</div>,
        }),
    },
    {
        name: "Account",
        path: "/account",
        restricted: true,
        authMode: "private",
        exact: true,
        component: Loadable({
            loader: () => import("./containers/Account/Account"),
            loading: () => <div>Loading...</div>,
        }),
    },
];

export default routes;
