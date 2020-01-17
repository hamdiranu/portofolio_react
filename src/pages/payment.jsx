import React, { Component } from 'react';
import Paymentcomponent from '../components/payment';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import '../styles/daftar.css';
import '../styles/checkout.css';

class Payment extends Component {
  render() {
    return (
      <div className="bodyCheckout">
        <Navigasi />
        <Paymentcomponent />
        <Footer />
      </div>
    );
  }
}

export default Payment;
