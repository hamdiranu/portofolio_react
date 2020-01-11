import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from '../components/navigasi';
import Carousel from '../components/carousel';
import Iklan from '../components/adsPromo';
import Footer from '../components/footer';

class Beranda extends Component {
      componentDidMount = () => {
        this.props.kategoriKota()
      };
      render() {
          return (
            <div>
                <Navigasi/>
                <div className="container-fluid">
                  <div className="row semua_iklan">
                    <div className="col-md-8 jarak_iklan" >
                      <Carousel/>
                    </div>
                    <Iklan/>
                  </div>
                </div>
                <Footer/>
              </div>
            )
            };
      }

export default connect(
	"listDestinasi, listHasilTriposo",
	actions
)(withRouter(Beranda));
