import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Auth from './containers/Auth/Auth';


export const routes = (user) => {
    console.log(user);
    if(user !== 'true') {
        return (
            <Switch>
                <Route exact path='/auth' component={Auth} />
                {/* <Redirect from='*' to='/auth' /> */}
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path='/' component={Layout} />
            {/* <Redirect from='*' to='/' /> */}
        </Switch>
    )
}
