import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';
import dummyBarang from '../images/dummy_barang.png';
import { withRouter, Link } from 'react-router-dom'

function AllItem () {
  return (
	<div class="container">
		<div className="row">
			<div className="col-md-4 kotak_barang">
				<div className="col-md-12">
					<Link className="underlineHover" to="/product"><img src={dummyBarang} className="fotoBarang" alt=""/></Link>
				</div>
				<div className="col-md-12"><span>Rp 6.000.000</span></div>
				<div className="col-md-12"><span>Iphone Xs</span></div>
			</div>
			<div className="col-md-4 kotak_barang">
				<div className="col-md-12">
					<Link className="underlineHover" to="/product"><img src={dummyBarang} className="fotoBarang" alt=""/></Link>
				</div>
				<div className="col-md-12"><span>Rp 6.000.000</span></div>
				<div className="col-md-12"><span>Iphone Xs</span></div>
			</div>
			<div className="col-md-4 kotak_barang">
				<div className="col-md-12">
					<Link className="underlineHover" to="/product"><img src={dummyBarang} className="fotoBarang" alt=""/></Link>
				</div>
				<div className="col-md-12"><span>Rp 6.000.000</span></div>
				<div className="col-md-12"><span>Iphone Xs</span></div>
			</div>
			<div className="col-md-4 kotak_barang">
				<div className="col-md-12">
					<Link className="underlineHover" to="/product"><img src={dummyBarang} className="fotoBarang" alt=""/></Link>
				</div>
				<div className="col-md-12"><span>Rp 6.000.000</span></div>
				<div className="col-md-12"><span>Iphone Xs</span></div>
			</div>
		</div>
	</div>
  )  
}

export default AllItem;