import React from 'react';
import '../styles/masuk.css';
import '../styles/bootstrap.min.css'
import logo from '../images/logoM.png';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Form, Button } from "react-bootstrap";

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
                <form onSubmit={e => e.preventDefault()}>
                    <div className="col-md-12" style={{display:"flex", marginTop:"20px"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Username</label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="text" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="username" 
                            placeholder="Your Username"
                            style={{maxHeight:"30px", maxWidth:"200px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Name</label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="text" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="firstName" 
                            placeholder="First Name"
                            style={{maxHeight:"30px", maxWidth:"200px"}}
                            onChange={e => this.props.changeInput(e)} />
                            <input 
                            type="text" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="lastName" 
                            placeholder="Last Name"
                            style={{maxHeight:"30px", maxWidth:"200px", marginLeft:"33px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Gender</label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <div style={{display:"flex"}}>
                            <input 
                            type="radio" 
                            id="login" 
                            className="col-md-3 col-sm-12 fadeIn second input_bar" 
                            name="gender" 
                            style={{maxHeight:"30px", maxWidth:"200px", margin:"auto"}}
                            onChange={e => this.props.changeInput(e)} />
                            <span style={{margin:"auto"}}>Male</span>

                            <input 
                            type="radio" 
                            id="login" 
                            className="col-md-3 col-sm-12 fadeIn second input_bar" 
                            name="gender" 
                            style={{maxHeight:"30px", maxWidth:"200px", margin:"auto"}}
                            onChange={e => this.props.changeInput(e)} />
                            <span style={{margin:"auto"}}> Female </span>

                            <input 
                            type="radio" 
                            id="login" 
                            className="col-md-3 col-sm-12 fadeIn second input_bar" 
                            name="gender" 
                            style={{maxHeight:"30px", maxWidth:"200px", margin:"auto"}}
                            onChange={e => this.props.changeInput(e)} />
                            <span style={{margin:"auto"}}> Others </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Date of Birth</label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="text" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="dateOfBirth" 
                            placeholder="DD / MM / YYYY"
                            style={{maxHeight:"30px", maxWidth:"200px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Address </label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="text" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar_address" 
                            name="address" 
                            placeholder="Address"
                            style={{maxHeight:"90px", maxWidth:"200px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                        <div className="col-md-5" style={{paddingLeft:"0px"}}>
                            <div className="col-md-12" style={{display:"flex"}}>
                                <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                                    <label htmlFor="#"> City </label>
                                </div>
                                <div className="col-md-9" style={{display:"flex", textAlign:"left"}}>
                                    <p style={{margin:"auto 0px"}}>:</p>
                                    <input 
                                    type="text" 
                                    id="login" 
                                    className="col-md-12 col-sm-12 fadeIn second input_bar" 
                                    name="city" 
                                    placeholder="City"
                                    style={{maxHeight:"30px", maxWidth:"200px"}}
                                    onChange={e => this.props.changeInput(e)} />
                                </div>
                            </div>
                            <div className="col-md-12" style={{display:"flex"}}>
                                <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                                    <label htmlFor="#"> Zip Code </label>
                                </div>
                                <div className="col-md-9" style={{display:"flex", textAlign:"left"}}>
                                    <p style={{margin:"auto 0px"}}>:</p>
                                    <input 
                                    type="text" 
                                    id="login" 
                                    className="col-md-12 col-sm-12 fadeIn second input_bar" 
                                    name="zipCode" 
                                    placeholder="Zip Code"
                                    style={{maxHeight:"30px", maxWidth:"200px"}}
                                    onChange={e => this.props.changeInput(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Phone number </label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="text" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="phoneNumber" 
                            placeholder="08xxxxxxxxxx"
                            style={{maxHeight:"30px", maxWidth:"200px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Password </label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="password" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="password" 
                            placeholder="Password"
                            style={{maxHeight:"30px", maxWidth:"200px"}}
                            onChange={e => this.props.changeInput(e)} />
                            <input 
                            type="password" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="confirmPassword" 
                            placeholder="Konfirmasi Password"
                            style={{maxHeight:"30px", maxWidth:"200px", marginLeft:"33px", fontSize:"14px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                    </div>
                    <div className="col-md-12" style={{display:"flex"}}>
                        <div className="col-md-3" style={{margin:"auto 0px", textAlign:"left"}}>
                            <label htmlFor="#"> Email </label>
                        </div>
                        <div className="col-md-4" style={{display:"flex", textAlign:"left"}}>
                            <p style={{margin:"auto 0px"}}>:</p>
                            <input 
                            type="email" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="email" 
                            placeholder="Email"
                            style={{maxHeight:"30px", maxWidth:"200px",marginLeft:"5px"}}
                            onChange={e => this.props.changeInput(e)} />
                            <input 
                            type="email" 
                            id="login" 
                            className="col-md-12 col-sm-12 fadeIn second input_bar" 
                            name="confirmEmail" 
                            placeholder="Konfirmasi Email"
                            style={{maxHeight:"30px", maxWidth:"200px", marginLeft:"38px", fontSize:"14px"}}
                            onChange={e => this.props.changeInput(e)} />
                        </div>
                    </div>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I Agree to The Terms and Conditions" style={{marginTop:"10px"}} />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{marginBottom:"10px"}}>
                        Submit
                    </Button>
                </form>
                <div id="formFooter">
                <Link className="underlineHover" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default connect("username, password, is_login",actions)(withRouter(SignUp));