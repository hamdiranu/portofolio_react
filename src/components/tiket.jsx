import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import '../styles/tiket.css';

class Tiket extends React.Component {
    postTicketData = async () => {
        const city = this.props.match.params.kota;
        await this.props.postOriginAndDepartureDate(city);
        this.props.history.push("/tiket");
    }

    render() {
        return (
            <div className="col-md-12 tiket">
                <div className="row">
                    <h2>Find Your Ticket</h2>
                </div>
                <div className="row">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="form-group">
                            <label for="originPlace">Origin (IATA Airport Code)</label>
                            <input
                                className="form-control"
                                type="text"
                                id="originPlace"
                                name="originPlace"
                                placeholder="example: CGK"
                                onChange={e => this.props.changeInput(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="departureDate">Departure Date (dd/mm/yyyy)</label>
                            <input
                                className="form-control"
                                type="text"
                                id="departureDate"
                                name="departureDate"
                                placeholder="example: 25/12/2020"
                                onChange={e => this.props.changeInput(e)}
                            />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            onClick={() => this.postTicketData()}
                        >Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect("originPlace, departureDate", actions)(withRouter(Tiket));