import React, { Component } from 'react';
import ProdukDetail from '../components/produkDetail';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import '../styles/daftar.css';
import '../styles/checkout.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

class ProductDetail extends Component {
  render() {
    return (
      <div className="bodyCheckout">
        <Navigasi />
        <ProdukDetail />
        <Footer />
      </div>
    );
  }
}

export default connect('product_detail, id_product', actions)(withRouter(ProductDetail));
