import React, { Component } from 'react';
import Checkoutcomponent from '../components/checkout';
import Navigasi from '../components/navigasi';
import dummyBarang from '../images/dummy_barang.png';
import Footer from '../components/footer';
import '../styles/daftar.css';
import '../styles/checkout.css';
import { Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom'

class ProductDetail extends Component {
  render() {
    return (
      <div className ="bodyCheckout">
        <Navigasi/>
        <div className="container" style={{border:"1px solid black", marginTop:"130px", padding:"10px 10px", borderRadius:"10px"}}>
          <div className="row">
            <div className="col-md-6" style={{textAlign:"center"}}>
              <div className="row">
                <div className="col-md-12" style={{textAlign:"center", width:"100%",height:"250px"}}><img style={{width:"160px",height:"230px"}} src={dummyBarang} className="fotoBarang" alt=""/></div>
                <div className="col-md-4"><img src={dummyBarang} className="fotoBarang" alt=""/></div>
                <div className="col-md-4"><img src={dummyBarang} className="fotoBarang" alt=""/></div>
                <div className="col-md-4"><img src={dummyBarang} className="fotoBarang" alt=""/></div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3>Product Name</h3>
              </div>
              <div>
                <h4>Rp 10.000.000</h4>
              </div>
              <div>
                <span>Spesifikasi :</span>
                <ol>
                  <li>
                    <span>a</span>
                  </li>
                  <li>
                    <span>b</span>
                  </li>
                  <li>
                    <span>c</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3>Deskripsi</h3>
              </div>
              <div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </span>
              </div>
              <div style={{textAlign:"center", paddingTop:"10px"}}>
                <select class="custom-select">
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div style={{textAlign:"center", paddingTop:"10px"}}>
                <Button variant="primary" type="submit" style={{marginBottom:"10px"}}>
                  <Link className="underlineHover" to="/cart">Add to Cart</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  };
}

export default ProductDetail;
