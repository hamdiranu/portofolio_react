import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasi";
import Footer from "../components/footer";
import ListTransaction from "../components/adminTransaksi";

class AdminTransaction extends Component {
  componentDidMount = () => {
    this.props.getAdminTransaksi();
  };
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Navigasi />
        <ListTransaction />
        <Footer />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(AdminTransaction));
