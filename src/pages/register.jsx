import React, { Component } from 'react';
import SignUp from '../components/signUp';
import '../styles/daftar.css';

class Register extends Component {
  render() {
    return (
      <div className="berandaLogin">
        <div className="fadeIn first judulSignUp">
          <h3 style={{ paddingTop: '10px', textAlign: 'center' }}>Sign Up</h3>
        </div>
        <SignUp />
      </div>
    );
  }
}

export default Register;
