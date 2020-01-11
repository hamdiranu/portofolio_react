import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import SekilasGambar from "../components/sekilasGambar";
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';

class ListDestinasi extends Component {
  componentDidMount = () => {
    this.props.kategoriKota()
  };
  render() {
    return (
      <div>
        <Navigasi {...this.props} />
        <SekilasGambar />
        <Footer/>
      </div>
    )
  };
}

export default connect("listDestinasi, listHasilTriposo", actions)(withRouter(ListDestinasi));