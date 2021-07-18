import { BrowserRouter, Switch } from "react-router-dom";

import Auth from "./containers/Auth";
import Layout from "./containers/Layout";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";



function App() {
    const isLogin = localStorage.getItem("isLogin") === "true" ? true : false;

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute component={Auth} path="/auth" isUnlock={isLogin} />
                <PrivateRoute
                    path="/"
                    isUnlock={isLogin}
                    redirectTo="/auth"
                    component={Layout}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
