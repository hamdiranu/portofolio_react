import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Form } from 'react-bootstrap';

class ListItemSearch extends React.Component {
  componentDidMount = async () => {
    this.props.getAllProduct();
  };
  render() {
    const list_product = this.props.listAllProduct.filter(
      element => element.kategori === this.props.kategori
    );
    console.log('cek list item', list_product);
    return (
      <div className="container-fluid">
        <div className="row profileBody-row">
          <div className="col-md-4">
            <div className="kotak_kategori">
              <div style={{ textAlign: 'center' }}>
                <h3>Kategori</h3>
              </div>
              <Form style={{ paddingTop: '10px', textAlign: 'center' }}>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInputKategori(e)}
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="ELEKTRONIK"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Elektronik
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInputKategori(e)}
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="FASHION"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Fashion
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInputKategori(e)}
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="OTOMOTIF"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    Otomotif
                  </label>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row" style={{ display: 'flex', marginTop: '20px' }}>
              {list_product.map((isi, i) => (
                <div className="col-md-4 kotak_barang">
                  <div className="col-md-12">
                    <img src={isi.gambar_1} className="fotoBarang" alt="" />
                  </div>
                  <div className="col-md-12">
                    <span>Rp {isi.price}</span>
                  </div>
                  <div className="col-md-12">
                    <span>{isi.item_name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect('listAllProduct, kategori', actions)(withRouter(ListItemSearch));
