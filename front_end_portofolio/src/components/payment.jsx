import React from 'react';
import '../styles/daftar.css';
import '../styles/bootstrap.min.css'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Form, Button, Row, Col } from "react-bootstrap";

class SignUp extends React.Component {

    doLogin = async () => {
        await this.props.postLogin()
        if (this.props.is_login){
            this.props.history.push("/profil");
        }
    }

    render() {
        return (
        <div className="wrapper fadeInDown">
            <div id="formRegister">
                <div style={{borderBottom:"1px solid black", paddingTop:"20px"}}><h3>Metode Pembayaran</h3></div>
                <Form style={{paddingTop:"10px"}}>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Col style={{display:"flex"}} md="8" sm="10">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Credit Card / Debit Card</label>
                            </div>
                        </Col>
                        <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                            <Form.Label column md="2" sm="1"></Form.Label>
                            <Col md="10" sm="10">
                                <Form.Label column md="12" sm="1">
                                    Cardholder :
                                </Form.Label>
                                <Form.Control type="text" placeholder="Cardholder" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                            <Form.Label column md="1" sm="1"></Form.Label>
                            <Col md="5" sm="10">
                                <Form.Label column md="12" sm="1">
                                    Card Number :
                                </Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Col>
                            
                            <Col md="5" sm="10">
                                <Form.Label column md="12" sm="1">
                                    Security Code :
                                </Form.Label>
                                <Form.Control type="text" placeholder="cvv" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                            <Form.Label column md="1" sm="1"></Form.Label>
                            <Col md="5" sm="10">
                                <Form.Label column md="12" sm="1">
                                    Expired Date :
                                </Form.Label>
                                <Form.Control type="text" placeholder="MM" />
                            </Col>
                            
                            <Col md="5" sm="10">
                                <Form.Label column md="12" sm="1">
                                :
                                </Form.Label>
                                <Form.Control type="text" placeholder="YYYY" />
                            </Col>
                        </Form.Group>
                        
                        <Col style={{display:"flex"}} md="8" sm="10">
                            <div class="form-check form-check-inline" style={{paddingLeft:"60px"}}>
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Bayar di tempat (COD)</label>
                            </div>
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{marginBottom:"10px"}}>
                    <Link className="underlineHover" to="/">Bayar</Link>
                    </Button>
                </Form>
            </div>
        </div>
        )
    }
}

export default connect("username, password, is_login",actions)(withRouter(SignUp));