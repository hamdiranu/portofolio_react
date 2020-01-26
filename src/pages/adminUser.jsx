import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasi";
import Footer from "../components/footer";
import ListUser from "../components/adminUser";

class AdminUser extends Component {
  componentDidMount = () => {
    this.props.getAdminUser();
  };
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Navigasi />
        <ListUser />
        <Footer />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(AdminUser));
