import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import '../styles/listTiketBody.css';
import moment from 'moment';

class ListTiketBody extends React.Component {
    bookTiket = () => {
        this.props.history.push("/booktiket");
    }

    render() {
        const ticketList = this.props.ticketList;
        const listingTicket = ticketList.map(item => {
            const dDate = new Date(item.dTime*1000);
            const stringDTime = moment(dDate).utcOffset("+0700").format("HH:mm");
            const aDate = new Date(item.aTime*1000);
            const stringATime = moment(aDate).utcOffset("+0700").format("HH:mm");
            const price = item.price*15000;
            var rupiah = "";		
            var angkarev = price.toString().split("").reverse().join("");
            for (var i = 0; i < angkarev.length; i++) if (i%3 == 0) rupiah += angkarev.substr(i,3) + ".";
            const stringPrice =  "Rp " + rupiah.split("",rupiah.length-1).reverse().join("") + ",00";
            return (
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={this.props.airlineImageLink[item.airlines[0]]} />
                        </div>
                        <div className="col-md-5">
                            <h6><span>Departure Time:</span> {stringDTime}</h6>
                            <h6><span>Arrival Time:</span> {stringATime}</h6>
                            <h6><span>Price:</span> {stringPrice}</h6>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={() => this.bookTiket()}>Book Ticket</button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="row listTiketBody">
                { listingTicket }
            </div>
        )
    }
}

export default connect("ticketList, airlineImageLink", actions)(withRouter(ListTiketBody));