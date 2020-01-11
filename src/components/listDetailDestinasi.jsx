import React from 'react';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";

class ListDetailDestinasi extends React.Component {
    componentDidMount = () =>{
        const paramKota = this.props.match.params.kota
        store.setState({ idKota:paramKota });
        this.props.kategoriKota()
    }
    render() {
        return (
            <React.Fragment>
                <div className="row"></div>
                    <div className="destinasi-judul" style={{textAlign:"center", borderBottom:"2px solid black"}}>
                        <h1>{this.props.match.params.kota}</h1>
                        <span>{this.props.listHasilTriposo.snippet}</span>
                        <div className="row"></div>
                    </div>
                <div className="row"><p></p></div>
                <div className="container destinasi-list-destinasi" >
                    <div className="row ">
                    {this.props.listDestinasi.map((isi,i)=>(
                        <div className="col-md-4 col-sm-12" style={{margin: "10px 0"}}>
                            <img src={isi.sizes.original.url} style={{width:"255px", height:"255px", maxWidth:"100%", objectFit:"cover", 
                                marginTop:"15px", borderRadius:"10px"}} alt=""/>
                            <h6 style={{paddingTop:"10px"}}>{isi.caption}</h6>
                        </div>
                    ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default connect("listDestinasi, listHasilTriposo, idKota, isLoading", actions)(withRouter(ListDetailDestinasi));