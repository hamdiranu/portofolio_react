import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';
import dummyBarang from '../images/dummy_barang.png';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react';
import { store, actions } from '../store';

class AllItem extends React.Component {

	componentDidMount = async ()=> {
		this.props.getAllProduct()
	}

    render() {

		const list_product = this.props.listAllProduct
		console.log("cek list item",list_product)

		return (
			<div class="container">
				<div className="row">
					{list_product.map((isi,i)=>(
						<div className="col-md-4 kotak_barang">
						<div className="col-md-12">
							<Link className="underlineHover" to={`/product/${isi.id}`}><img style={{borderRadius:"10px"}} src={isi.gambar_1} className="fotoBarang" alt=""/></Link>
						</div>
						<div className="col-md-12" style={{paddingBottom:"10px",paddingTop:"10px"}}><span>Rp {isi.price}</span></div>
					<div className="col-md-12"><span>{isi.item_name}</span></div>
					</div>
					))}
				</div>
			</div>
		)  
	}
}
export default connect("listAllProduct",actions)(withRouter(AllItem));