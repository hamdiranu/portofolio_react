import React from 'react';
import '../styles/masuk.css';
import '../styles/carousel.css';
import '../styles/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Button } from "react-bootstrap";

class CartComponent extends React.Component {

    render() {
        const listCartItem = this.props.listCart.filter((element) => element.total_product > 0)
        return (
            <React.Fragment>
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
                {listCartItem.map((isi,i)=>(
                    <div className="container" style={{border:"1px solid black", padding:"10px 10px", borderRadius:"10px",backgroundColor:"white", marginBottom:"20px"}}>
                        <div className="row">
                        <div className="col-md-3" style={{textAlign:"center"}}>
                            <Link className="underlineHover" to={`/product/${isi.product_id}`}><img style={{borderRadius:"10px"}} src={isi.gambar_1} className="fotoBarang" alt=""/></Link>
                        </div>
                        <div className="col-md-3" style={{textAlign:"center", margin:"auto"}}>
                            <span> {isi.product_name} </span>
                        </div>
                        <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
                            <span> Rp {isi.product_price} </span>
                        </div>
                        <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
                            <span> {isi.total_product} </span>
                        </div>
                        <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
                            <span> Rp {isi.sub_total} </span>
                        </div>
                        </div>
                    </div>
                ))}
                <div className="container" style={{border:"1px solid black", padding:"10px 10px", borderRadius:"10px",backgroundColor:"white", marginBottom:"20px"}}>
                    <div className="row">
                        <div className="col-md-2" style={{textAlign:"center", margin:"auto"}}>
                        <span> TOTAL </span>
                        </div>
                        <div className="col-md-6" style={{textAlign:"left",margin:"auto"}}>
                        <span> Rp {this.props.total_harga_cart} </span>
                        </div>
                        <div className="col-md-2" style={{textAlign:"center"}}>
                        <span>{this.props.total_barang_cart} </span>
                        </div>
                        <div className="col-md-2" style={{textAlign:"center"}}>
                        <Button variant="primary" type="submit" style={{margin:"auto"}}>
                            <Link className="underlineHover" to="/checkout">Checkout</Link>
                        </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("total_barang_cart, listCart, cart_id, total_harga_cart",actions)(withRouter(CartComponent));