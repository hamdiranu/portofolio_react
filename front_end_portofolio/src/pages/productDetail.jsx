import React, { Component } from 'react';
import Checkoutcomponent from '../components/checkout';
import Navigasi from '../components/navigasi';
import dummyBarang from '../images/dummy_barang.png';
import Footer from '../components/footer';
import '../styles/daftar.css';
import '../styles/checkout.css';
import { Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react';
import { store, actions } from '../store';

class ProductDetail extends Component {

  componentDidMount = () =>{
    const produk_id = this.props.match.params.id
    store.setState({ id_product:produk_id });
    console.log("cek state id", this.props.id_product)
    this.props.getProductDetail()
  }


  render() {
    const detail_product=this.props.product_detail
    console.log("isi detail produk",detail_product)
    return (
      <div className ="bodyCheckout">
        <Navigasi/>
        <div className="container" style={{border:"1px solid black", marginTop:"130px", padding:"10px 10px", borderRadius:"10px"}}>
          <div className="row">
            <div className="col-md-6" style={{textAlign:"center"}}>
              <div className="row">
                <div className="col-md-12" style={{textAlign:"center", width:"100%",height:"250px"}}><img style={{width:"160px",height:"230px",borderRadius:"10px"}} src={detail_product.gambar_1} className="fotoBarang" alt=""/></div>
                <div className="col-md-4"><img style={{borderRadius:"10px"}} src={detail_product.gambar_2} className="fotoBarang" alt=""/></div>
                <div className="col-md-4"><img style={{borderRadius:"10px"}} src={detail_product.gambar_3} className="fotoBarang" alt=""/></div>
                <div className="col-md-4"><img style={{borderRadius:"10px"}} src={detail_product.gambar_4} className="fotoBarang" alt=""/></div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3>{detail_product.item_name}</h3>
              </div>
              <div>
                <h4>Rp {detail_product.price}</h4>
              </div>
              <div>
                <span>Spesifikasi :</span>
                <ol>
                  <li>
                    <span>{detail_product.spesifikasi_1}</span>
                  </li>
                  <li>
                    <span>{detail_product.spesifikasi_2}</span>
                  </li>
                  <li>
                    <span>{detail_product.spesifikasi_3}</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3>Deskripsi</h3>
              </div>
              <div>
                <span>
                {detail_product.deskripsi}
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

export default connect("product_detail, id_product",actions)(withRouter(ProductDetail));