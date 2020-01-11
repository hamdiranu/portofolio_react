import React, { Component } from 'react';
import SignIn from '../components/signin'

class Masuk extends Component {
    
      render() {
          return (
            <div>
                <SignIn {...this.props}/>
              </div>
            )
            };
      }

export default Masuk;
