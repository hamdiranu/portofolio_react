import React from 'react';
import '../styles/productDetail.css';
import '../styles/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import { Button } from 'react-bootstrap';

class ProductDetail extends React.Component {
  componentDidMount = () => {
    const produk_id = this.props.match.params.id;
    store.setState({ id_product: produk_id });
    this.props.getProductDetail();
  };

  postItem = async () => {
    if (localStorage.getItem('is_login')) {
      await this.props.postCart();
      this.props.history.push('/cart');
    } else {
      alert('Mohon login terlebih dahulu');
      this.props.history.push('/signIn');
    }
  };

  render() {
    const detail_product = this.props.product_detail;

    return (
      <div className="container kotak_product">
        <div className="row">
          <div
            className="col-md-6 gambar_detail"
            style={{ textAlign: 'center', borderRight: '1px solid black' }}
          >
            <div className="row">
              <div
                className="col-md-12"
                style={{ textAlign: 'center', width: '100%', height: '250px' }}
              >
                <img
                  style={{ width: '160px', height: '230px', borderRadius: '10px' }}
                  src={detail_product.gambar_1}
                  className="fotoBarang"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  style={{ borderRadius: '10px' }}
                  src={detail_product.gambar_2}
                  className="fotoBarang"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  style={{ borderRadius: '10px' }}
                  src={detail_product.gambar_3}
                  className="fotoBarang"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  style={{ borderRadius: '10px' }}
                  src={detail_product.gambar_4}
                  className="fotoBarang"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ margin: '20px 10px' }}>
              <h3>{detail_product.item_name}</h3>
            </div>
            <div style={{ margin: '10px 10px' }}>
              <h4>Rp {detail_product.price}</h4>
            </div>
            <div style={{ margin: '10px 10px' }}>
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
            <div style={{ margin: '10px 10px' }}>
              <h3>Deskripsi</h3>
            </div>
            <div style={{ margin: '10px 10px' }}>
              <span>{detail_product.deskripsi}</span>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '10px' }}>
              <input
                style={{ width: '40%' }}
                type="text"
                onChange={e => this.props.handleSelect(e)}
                name="qty"
                placeholder="1"
              />
            </div>
            <div style={{ textAlign: 'center', paddingTop: '10px' }}>
              <Button
                variant="primary"
                onClick={this.postItem}
                type="submit"
                style={{ marginBottom: '10px' }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  'is_login, cart_id, product_detail, id_product',
  actions
)(withRouter(ProductDetail));
