import React, { Component } from 'react';
import SignIn from '../components/signin';
import '../styles/login.css';
import logoSignIn from '../images/login_img.jpeg';

class Masuk extends Component {
  render() {
    return (
      <div className="berandaLogin">
          <SignIn/>
      </div>
    )
  };
}

export default Masuk;
