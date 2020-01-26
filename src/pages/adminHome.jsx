import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasi";
import Footer from "../components/footer";
import Home from "../components/adminHome";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(AdminHome));
