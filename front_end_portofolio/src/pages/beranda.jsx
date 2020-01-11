import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from '../components/navigasi';
import Carousel from '../components/carousel';
import Footer from '../components/footer';

class Beranda extends Component {
      componentDidMount = () => {
        this.props.kategoriKota()
      };
      render() {
          return (
            <div>
                <Navigasi/>
                <Carousel/>
                <Footer/>
              </div>
            )
            };
      }

export default connect(
	"listDestinasi, listHasilTriposo",
	actions
)(withRouter(Beranda));
