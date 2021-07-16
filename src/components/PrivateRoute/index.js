import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
    component: Component,
    isUnlock,
    redirectTo,
    path,
    ...rest
}) => {
    if (isUnlock) {
        return (
            <Route
                path={path}
                render={(props) => <Component {...props} />}
                {...rest}
            />
        );
    }

    return <Redirect to={redirectTo} from={path} />;
};

export default PrivateRoute;
