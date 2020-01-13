import React from 'react';
import '../styles/masuk.css';
import '../styles/bootstrap.min.css'
import logo from '../images/logoM.png';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions } from '../store'

class SignIn extends React.Component {

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
                        id="login" 
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
                        onClick={this.doLogin}/>
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

export default connect("username, password, is_login",actions)(withRouter(SignIn));