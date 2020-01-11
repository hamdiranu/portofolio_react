import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import ListTiketBody from '../components/listTiketBody';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';

class ListTiket extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigasi />
                <div className="container">
                    <ListTiketBody />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(ListTiket));