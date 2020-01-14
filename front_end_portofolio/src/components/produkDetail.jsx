import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import { Button } from "react-bootstrap";

class ProductDetail extends React.Component {

	componentDidMount = () =>{
		this.props.getCart()
		const produk_id = this.props.match.params.id
		store.setState({ id_product:produk_id });
		console.log("cek state id", this.props.id_product)
		this.props.getProductDetail()
	}

	postItem = async() => {
		await this.props.postCart()
		this.props.history.push("/cart")
    }

    render() {

		const detail_product=this.props.product_detail
		console.log("isi detail produk",detail_product)

	return (
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
						<input style={{width:"40%"}} type="text" onChange={e => this.props.handleSelect(e)} name="qty" placeholder="1" />
					</div>
					<div style={{textAlign:"center", paddingTop:"10px"}}>
					<Button variant="primary" onClick={this.postItem} type="submit" style={{marginBottom:"10px"}}>
						Add to Cart
					</Button>
					</div>
				</div>
			</div>
		</div>
  	)}
}
export default connect("cart_id, product_detail, id_product",actions)(withRouter(ProductDetail));