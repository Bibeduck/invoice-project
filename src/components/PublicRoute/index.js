import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, isUnlock, path, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isUnlock ? (
                <Redirect to="/home" from={path} />
            ) : (
                <Component {...props} />
            )
        }
    />
);

export default PublicRoute;
