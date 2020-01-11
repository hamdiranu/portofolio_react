import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from '../store';
import NotMatch from '../pages/notMatch';
import Profile from '../pages/profil';
import Login from '../pages/signIn';
import Beranda from '../pages/beranda';

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* PAGES ROUTING */}
                    <Route exact path="/" component={Beranda} />
                    <Route exact path='/profil' component={Profile} />
                    <Route exact path='/signIn' component={Login} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute;