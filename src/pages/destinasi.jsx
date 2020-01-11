import React from 'react';
import '../styles/detailDestinasi.css';
import ListDetailDestinasi from '../components/listDetailDestinasi';
import Tiket from '../components/tiket';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Destinasi extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navigasi/>
                <div className="container-fluid" style={{paddingTop: "120px", marginBottom: "-60px"}}>
                    <div className="row destinasi">
                        <div className="col-md-8" style={{textAlign:"center"}}>
                            <ListDetailDestinasi/>
                        </div>
                        <div className="col-md-4" style={{textAlign:"center"}}>
                                <Tiket />
                            <div className="col-md-12"><p></p></div>
                            <div>
                                <h5>Location Map</h5>
                                <img src={`https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=xWRMtuwOIeb403xNRnnNiKPDXNV8mgraQqDMn29r4sg&z=13&c=`+this.props.latitudeKota+","+this.props.longitudeKota} style={{width:"100%", height:"100%"}} className="App-logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>  
        )
    }
};

export default connect("latitudeKota, longitudeKota, listDestinasi, listHasilTriposo, idKota, isLoading", actions)(withRouter(Destinasi));