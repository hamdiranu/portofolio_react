import React, { Component } from 'react';
import Checkoutcomponent from '../components/checkout';
import Navigasi from '../components/navigasi';
import dummyBarang from '../images/dummy_barang.png';
import Footer from '../components/footer';
import '../styles/daftar.css';
import '../styles/checkout.css';
import { Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom'


class Cart extends Component {
  render() {
    return (
      <div className ="bodyCheckout">
        <Navigasi/>
        <div style={{marginTop:"130px", marginBottom:"20px", textAlign:"center"}}>
          <h1>My Cart</h1>
        </div>
        <div className="container" style={{border:"1px solid black", padding:"10px 10px", borderRadius:"10px",backgroundColor:"white", marginBottom:"20px"}}>
          <div className="row">
            <div className="col-md-3" style={{textAlign:"center"}}>
              <span>PRODUCT </span>
            </div>
            <div className="col-md-3" style={{textAlign:"center"}}>
              <span>PRODUCT NAME </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              <span> PRICE </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              <span> QUANTITY </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              <span> SUBTOTAL </span>
            </div>
          </div>
        </div>
        <div className="container" style={{border:"1px solid black", padding:"10px 10px", borderRadius:"10px",backgroundColor:"white", marginBottom:"20px"}}>
          <div className="row">
            <div className="col-md-3" style={{textAlign:"center"}}>
              <img src={dummyBarang} className="fotoBarang" alt=""/>
            </div>
            <div className="col-md-3" style={{textAlign:"center", margin:"auto"}}>
              <span> Iphone Xs </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
              <span> Rp 8.000.000 </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
              <span> 2 </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
              <span> Rp 16.000.000 </span>
            </div>
          </div>
        </div>
        <div className="container" style={{border:"1px solid black", padding:"10px 10px", borderRadius:"10px",backgroundColor:"white", marginBottom:"20px"}}>
          <div className="row">
            <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
              <span> TOTAL </span>
            </div>
            <div className="col-md-8" style={{textAlign:"left",margin:"auto"}}>
              <span> Rp 10.000.000 </span>
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              <Button variant="primary" type="submit" style={{margin:"auto"}}>
              <Link className="underlineHover" to="/checkout">Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  };
}

export default Cart;
