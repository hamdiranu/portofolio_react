import React from 'react';
import '../styles/masuk.css';
import '../styles/bootstrap.min.css'
import logo from '../images/logoM.png';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'
import axios from "axios";

class SignIn extends React.Component {

    handleLogin = () => {
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/token",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              username: self.props.username,
              password: self.props.password
            }
        }
        axios(req)
        .then(function(response) {
            if (response.data.hasOwnProperty('token')){
                localStorage.setItem('username', self.props.username)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user_id', response.data.id)
                localStorage.setItem('is_login', true)
                store.setState({
                    "is_login": true,
                    "username": self.props.username,
                    "user_id" : response.data.id,
                    "token" : response.data.token
                });
                // console.log("status login", this.props.is_login)
                // console.log("status username", this.props.username)
                self.props.history.push("/")
            }           
            console.log("response data",response.data)
        })
        .catch(function(error) {
            alert('invalid username or password')
        })
    }

    doLogin = async () => {
        await this.props.postLogin()
        if (this.props.is_login){
            this.props.history.push("/profil");
            alert("Login Success")
        }
    }

    render() {
        return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <img style={{ marginTop:'30px', marginBottom:'30px'}} src={logo} id="icon" alt="User Icon" />
                </div>
                    {/* <!-- Login Form --> */}
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                        type="text" 
                        id="username" 
                        className="col-md-12 col-sm-12 fadeIn second" 
                        name="username" 
                        placeholder="Your Username"
                        onChange={e => this.props.changeInput(e)} />
                        <input 
                        type="password" 
                        id="password" 
                        className="fadeIn third" 
                        name="password" 
                        placeholder="Your Password"
                        onChange={e => this.props.changeInput(e)} />
                        <input 
                        type="submit" 
                        className="fadeIn fourth" 
                        value="Log In"
                        style={{marginBottom:"15px", marginTop:"10px"}}
                        onClick={this.handleLogin}/>
                    </form>
                <div style={{marginBottom:"10px"}}>
                    <span>Doesn't have account? <Link className="underlineHover" to="/signUp">Sign up</Link> now</span>
                </div>
                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                <Link className="underlineHover" to="/">Back to Home</Link>
                </div>

            </div>
            </div>
        )
    }
}

export default connect("token, username, user_id, password, is_login",actions)(withRouter(SignIn));