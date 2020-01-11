import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { store, actions } from "../store";
import '../styles/notMatch.css';

class BookTiket extends React.Component {
    render() {
        if (this.props.is_login) {
            return (
                <div className="container">
                    <div className="row notMatch">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src="https://image.freepik.com/free-photo/group-friends-doing-road-trip_23-2148196397.jpg" />
                            <h1>Enjoy Your Trip!</h1>
                            <Link to="/">Back to Home</Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to={{ pathname: "/masuk" }} />;
        }
    }
}

export default connect("is_login", actions)(withRouter(BookTiket));