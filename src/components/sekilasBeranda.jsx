import React, { Component } from 'react';
import "../styles/bootstrap.min.css";
import "../styles/sekilasGambar.css"

// Import STORE RESOURCES
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store";

class SekilasGambar extends Component {
    
    render() {
        return (
            <div className="container sekilasBeranda">
                <div>                    
                    <h3 style={{textAlign:"center", marginTop:"30px"}}>Top List Destinasi Pesona Indonesia 2020</h3>               
                </div>
                <div className="row">
                    <div className="col-md-3 sekilas-gambar" style={{textAlign:"center"}}>
                        <Link to="/destinasi/Malang" onClick={e =>this.props.kategoriKota("Malang")} ><img src={'https://upload.wikimedia.org/wikipedia/commons/5/58/Malang_WEB.jpg'} 
                            style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", width:"255px", height:"255px", maxWidth:"100%", objectFit:"cover"}} alt="gambardestinasi" /></Link>
                        <Link to="/destinasi/Malang" onClick={e =>this.props.kategoriKota("Malang")} style={{fontSize:"30px",paddingTop:"15px"}}>Malang</Link>
                    </div>
                    <div className="col-md-3 sekilas-gambar" style={{textAlign:"center"}}>
                        <Link to="/destinasi/Jakarta" onClick={e =>this.props.kategoriKota("Jakarta")} ><img src={'https://upload.wikimedia.org/wikipedia/commons/b/b6/Jakarta_Skyline_Part_2.jpg'} 
                            style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", width:"255px", height:"255px", maxWidth:"100%", objectFit:"cover"}} alt="gambardestinasi" /></Link>
                        <Link to="/destinasi/Jakarta" onClick={e =>this.props.kategoriKota("Jakarta")} style={{fontSize:"30px",paddingTop:"15px"}}>Jakarta</Link>
                    </div>
                    <div className="col-md-3 sekilas-gambar" style={{textAlign:"center"}}>
                        <Link to="/destinasi/Bandung" onClick={e =>this.props.kategoriKota("Bandung")} ><img src={'https://upload.wikimedia.org/wikipedia/commons/b/b0/Gedung_Sate_-_backside.jpg'} 
                            style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", width:"255px", height:"255px", maxWidth:"100%", objectFit:"cover"}} alt="gambardestinasi" /></Link>
                        <Link to="/destinasi/Bandung" onClick={e =>this.props.kategoriKota("Bandung")} style={{fontSize:"30px",paddingTop:"15px"}}>Bandung</Link>
                    </div>
                    <div className="col-md-3 sekilas-gambar" style={{textAlign:"center"}}>
                        <Link to="/destinasi/Denpasar" onClick={e =>this.props.kategoriKota("Denpasar")} ><img src={'https://upload.wikimedia.org/wikipedia/commons/c/c9/Denpasar%2C_Bali.jpg'} 
                            style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", width:"255px", height:"255px", maxWidth:"100%", objectFit:"cover"}} alt="gambardestinasi" /></Link>
                        <Link to="/destinasi/Denpasar" onClick={e =>this.props.kategoriKota("Denpasar")} style={{fontSize:"30px",paddingTop:"15px"}}>Denpasar</Link>
                    </div>
                </div>
            </div>         
        );
    }
}

export default connect(
	"latitudeKota, longitudeKota, listDestinasi, listHasilTriposo, idKota, isLoading, idKota",
	actions
)(withRouter(SekilasGambar));