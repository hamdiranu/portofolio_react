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
                <Form style={{paddingTop:"10px"}}>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Username :
                        </Form.Label>
                        <Col md="5" sm="10">
                        <Form.Control type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Name :
                        </Form.Label>
                        <Col style={{display:"flex"}} md="7" sm="10">
                        <Form.Control type="text" placeholder="First Name" />
                        <Form.Control type="text" placeholder="Last Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Gender :
                        </Form.Label>
                        <Col style={{display:"flex"}} md="8" sm="10">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                <label class="form-check-label" for="inlineRadio3">Others</label>
                            </div>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Date Of Birth :
                        </Form.Label>
                        <Col md="5" sm="10">
                        <Form.Control type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Address :
                        </Form.Label>
                        <Col md="4" sm="10"> 
                        <Form.Control type="text" className="addressBar" style={{width:"90%"}} placeholder="Address" />
                        </Col>
                        <Col md="4" sm="12">
                            <Form.Label column md="4" sm="1">City : </Form.Label>
                            <Form.Control type="text" style={{width:"50%"}} placeholder="City" />
                            <Form.Label column md="4" sm="1">Zip Code : </Form.Label>
                            <Form.Control type="text" style={{width:"50%"}} placeholder="Zip Code" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Phone Number :
                        </Form.Label>
                        <Col md="5" sm="10">
                        <Form.Control type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Password :
                        </Form.Label>
                        <Col style={{display:"flex"}} md="7" sm="10">
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Control type="password" placeholder="Konfirmasi Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formUsername" controlId="formPlaintextEmail">
                        <Form.Label column md="1" sm="1"></Form.Label>
                        <Form.Label column md="2" sm="1">
                        Email :
                        </Form.Label>
                        <Col style={{display:"flex"}} md="7" sm="12">
                        <Form.Control type="email" className="emailInput" placeholder="Email" />
                        <Form.Control type="email" placeholder="Konfirmasi Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I Agree to The Terms and Conditions" style={{marginTop:"10px"}} />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{marginBottom:"10px"}}>
                        Submit
                    </Button>
                </Form>
                <div id="formFooter">
                <Link className="underlineHover" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default connect("username, password, is_login",actions)(withRouter(SignUp));