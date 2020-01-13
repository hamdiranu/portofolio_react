import React, { Component } from 'react';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import dummyBarang from '../images/dummy_barang.png';
import '../styles/listItem.css';
import { Form, Row, Col, ButtonGroup, Input, Button } from "react-bootstrap";


class Profil extends Component {
  render() {
    return (
      <div>
        <Navigasi {...this.props} />
        <div className="container-fluid">
          <div className="row profileBody-row"> 
            <div className="col-md-4">
              <div className="kotak_kategori">
                <div style={{textAlign:"center"}}>
                  <h3>Kategori</h3>
                </div>
                <Form style={{paddingTop:"10px", textAlign:"center"}}> 
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Elektronik</label>
                  </div>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                      <label class="form-check-label" for="inlineRadio2">Fashion</label>
                  </div>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                      <label class="form-check-label" for="inlineRadio3">Otomotif</label>
                  </div>
                </Form>
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="row" style={{ display:"flex", marginTop:"20px"}}>
                <div className="col-md-4 kotak_barang">
                  <div className="col-md-12">
                    <img src={dummyBarang} className="fotoBarang" alt=""/>
                  </div>
                  <div className="col-md-12"><span>Rp 6.000.000</span></div>
                  <div className="col-md-12"><span>Iphone Xs</span></div>
                </div>
                <div className="col-md-4 kotak_barang">
                  <div className="col-md-12">
                    <img src={dummyBarang} className="fotoBarang" alt=""/>
                  </div>
                  <div className="col-md-12"><span>Rp 6.000.000</span></div>
                  <div className="col-md-12"><span>Iphone Xs</span></div>
                </div>
                <div className="col-md-4 kotak_barang">
                  <div className="col-md-12">
                    <img src={dummyBarang} className="fotoBarang" alt=""/>
                  </div>
                  <div className="col-md-12"><span>Rp 6.000.000</span></div>
                  <div className="col-md-12"><span>Iphone Xs</span></div>
                </div>
                <div className="col-md-4 kotak_barang">
                  <div className="col-md-12">
                    <img src={dummyBarang} className="fotoBarang" alt=""/>
                  </div>
                  <div className="col-md-12"><span>Rp 6.000.000</span></div>
                  <div className="col-md-12"><span>Iphone Xs</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  };
}

export default Profil