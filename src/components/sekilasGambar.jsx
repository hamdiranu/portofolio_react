import React, { Component } from 'react';
import "../styles/bootstrap.min.css";
import "../styles/sekilasGambar.css"

// Import STORE RESOURCES
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class SekilasGambar extends Component {
    render() {
        return (
            <div className="container">
                <div>                    
                    <h1 style={{textAlign:"center", paddingTop: "150px"}}>hasil pencarian destinasi di kota <strong>{this.props.idKota}</strong></h1>                     
                </div>
                <div className="row">
                        {this.props.listDestinasi.slice(0,8).map((data,key)=>(
                            <div className="col-md-3 sekilas-gambar">
                            <Link to={"/destinasi/" + this.props.idKota} onClick={e =>this.props.kategoriKota(this.props.idKota)} ><img src={data.sizes.original.url} 
                            style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", marginBottom:"30px", width:"255px", height:"255px", objectFit:"cover"}} alt="gambardestinasi" /></Link>
                            <h5 style={{textAlign:"center"}}><Link to={"/destinasi/" + this.props.idKota} onClick={e =>this.props.kategoriKota(this.props.idKota)} style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>{data.caption}</Link></h5>
                            </div>
                        ))}
                </div>
            </div>         
        );
    }
}

export default connect("listDestinasi, listHasilTriposo, idKota", actions)(withRouter(SekilasGambar));