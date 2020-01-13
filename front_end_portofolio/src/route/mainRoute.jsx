import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from '../store';
import NotMatch from '../pages/notMatch';
import Profile from '../pages/profil';
import Login from '../pages/signIn';
import Register from '../pages/register';
import Beranda from '../pages/beranda';
import ListItem from '../pages/listItem';
import Checkout from '../pages/checkout';
import Payment from '../pages/payment';
import ProductDetail from '../pages/productDetail';
import Cart from '../pages/cart';

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* PAGES ROUTING */}
                    <Route exact path="/" component={Beranda} />
                    <Route exact path='/profil' component={Profile} />
                    <Route exact path='/signIn' component={Login} />
                    <Route exact path='/signUp' component={Register} />
                    <Route exact path='/listitem' component={ListItem} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/payment' component={Payment} />
                    <Route exact path='/product' component={ProductDetail} />
                    <Route exact path='/cart' component={Cart} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute;