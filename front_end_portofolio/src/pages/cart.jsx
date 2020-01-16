import React, { Component } from 'react';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import CartComponent from '../components/cart';
import '../styles/daftar.css';
import '../styles/checkout.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

class Cart extends Component {
  render() {
    this.props.getCart()
    this.props.getCartDetail()
    return (
      <div className ="bodyCheckout">
        <Navigasi/>
        <CartComponent/>
        <Footer/>
      </div>
    )
  };
}

export default connect("total_barang_cart, listCart, cart_id, total_harga_cart",actions)(withRouter(Cart));
