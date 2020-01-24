import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasi";
import Carousel from "../components/carousel";
import Iklan from "../components/adsPromo";
import Footer from "../components/footer";
import AllItem from "../components/allItem";

class Beranda extends Component {
  componentDidMount = () => {
    this.props.getCart();
  };

  render() {
    return (
      <div>
        <Navigasi />
        <div className="container-fluid body_beranda">
          <div className="row semua_iklan">
            <div className="col-md-8 jarak_iklan">
              <Carousel />
            </div>
            <Iklan />
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            <h1>ALL ITEM</h1>
          </div>
          <div style={{ display: "flex" }}>
            <AllItem />
          </div>
          <div className="row">
            <div style={{ border: "1px solid black" }}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect("cart_id, is_login", actions)(withRouter(Beranda));
