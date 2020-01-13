import React, { Component } from 'react';
import Checkoutcomponent from '../components/checkout';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import '../styles/daftar.css';
import '../styles/checkout.css';

class Checkout extends Component {
  render() {
    return (
      <div className ="bodyCheckout">
        <Navigasi/>
        <Checkoutcomponent/>
        <Footer/>
      </div>
    )
  };
}

export default Checkout;
