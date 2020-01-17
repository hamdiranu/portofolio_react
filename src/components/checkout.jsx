import React from 'react';
import '../styles/daftar.css';
import '../styles/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Form, Button, Row, Col } from 'react-bootstrap';

class componentCheckout extends React.Component {
  checkOut = async () => {
    await this.props.handleCheckout();
    this.props.history.push('/payment');
  };

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="berandaLogin">
        <div className="fadeIn first judulSignUp">
          <h3 style={{ paddingTop: '10px', textAlign: 'center' }}>Checkout</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="wrapper fadeInDown">
                <div id="formRegister">
                  <div>
                    <h4 style={{ paddingTop: '20px' }}>ALamat Pengiriman</h4>
                  </div>
                  <Form onSubmit={this.submitHandler} style={{ paddingTop: '10px' }}>
                    <Form.Group as={Row} className="formCheckout" controlId="formPlaintextEmail">
                      <Form.Label column md="1" sm="1"></Form.Label>
                      <Form.Label column md="3" sm="1">
                        Nama Penerima :
                      </Form.Label>
                      <Col md="6" sm="10">
                        <Form.Control
                          onChange={e => this.props.changeInput(e)}
                          name="nama_penerima_checkout"
                          type="text"
                          placeholder="Nama Penerima"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formCheckout" controlId="formPlaintextEmail">
                      <Form.Label column md="1" sm="1"></Form.Label>
                      <Form.Label column md="3" sm="1">
                        Alamat :
                      </Form.Label>
                      <Col md="6" sm="10">
                        <Form.Control
                          onChange={e => this.props.changeInput(e)}
                          name="alamat_checkout"
                          type="text"
                          placeholder="Alamat"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formCheckout" controlId="formPlaintextEmail">
                      <Form.Label column md="1" sm="1"></Form.Label>
                      <Form.Label column md="3" sm="1">
                        Kode Pos :
                      </Form.Label>
                      <Col md="6" sm="10">
                        <Form.Control
                          onChange={e => this.props.changeInput(e)}
                          name="kode_pos_checkout"
                          type="text"
                          placeholder="Kode Pos"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formCheckout" controlId="formPlaintextEmail">
                      <Form.Label column md="1" sm="1"></Form.Label>
                      <Form.Label column md="3" sm="1">
                        Nomor Tlp. :
                      </Form.Label>
                      <Col md="6" sm="10">
                        <Form.Control
                          onChange={e => this.props.changeInput(e)}
                          name="nomor_telepon_checkout"
                          type="text"
                          placeholder="Nomor Tlp."
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="kotakRingkasanCheckout">
                <div className="col-md-12" style={{ textAlign: 'center' }}>
                  <h5>Ringkasan Pembelian</h5>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div>
                    <span>Jumlah barang : {this.props.total_barang_cart}</span>
                  </div>
                  <div>
                    <span>Total : Rp {this.props.total_harga_cart}</span>
                  </div>
                </div>
                <div className="col-md-12" style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button
                    onClick={this.checkOut}
                    variant="primary"
                    type="submit"
                    style={{ margin: 'auto' }}
                  >
                    <Link className="underlineHover" to="/payment">
                      Bayar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="shippingMethod">
            <div id="formRegister">
              <h5 className="metodePengiriman">Metode Pengiriman :</h5>
              <Form style={{ paddingTop: '10px', textAlign: 'center' }}>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInput(e)}
                    name="metode_pengiriman_checkout"
                    id="inlineRadio1"
                    value="TIKI"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    TIKI
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInput(e)}
                    name="metode_pengiriman_checkout"
                    id="inlineRadio2"
                    value="JNE"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    JNE
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInput(e)}
                    name="metode_pengiriman_checkout"
                    id="inlineRadio3"
                    value="FedEx"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    FedEx
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInput(e)}
                    name="metode_pengiriman_checkout"
                    id="inlineRadio3"
                    value="Go-send"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    Go-send
                  </label>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  'metode_pengiriman_checkout, nama_penerima_checkout, alamat_checkout, kode_pos_checkout, nomor_telepon_checkout, total_barang_cart, total_harga_cart, is_login',
  actions
)(withRouter(componentCheckout));
