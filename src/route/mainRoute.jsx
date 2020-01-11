import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from '../store';
import Destinasi from '../pages/destinasi';
import ListTiket from '../pages/listTiket';
import NotMatch from '../pages/notMatch';
import Profile from '../pages/profil';
import Login from '../pages/signin';
import Beranda from '../pages/beranda';
import BookTiket from '../pages/bookTiket';
import ListDestinasi from '../pages/listDestinasi';

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* PAGES ROUTING */}
                    <Route exact path="/" component={Beranda} />
                    <Route exact path='/profil' component={Profile} />
                    <Route exact path='/masuk' component={Login} />
                    <Route exact path="/destinasi/:kota" component={Destinasi} />
                    <Route exact path="/tiket" component={ListTiket} />
                    <Route exact path="/booktiket" component={BookTiket} />
                    <Route exact path="/listdestinasi" component={ListDestinasi} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute;