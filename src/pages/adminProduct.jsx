import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasi";
import Footer from "../components/footer";
import ListProduct from "../components/adminProduct";

class AdminProduct extends Component {
  componentDidMount = () => {
    this.props.getAdminProduct();
  };
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Navigasi />
        <ListProduct />
        <Footer />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(AdminProduct));
