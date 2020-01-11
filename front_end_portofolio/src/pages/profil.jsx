import React, { Component } from 'react';
import Navigasi from '../components/navigasi';
import BadanProfil from '../components/badanprofil';
import Footer from '../components/footer'

class Profil extends Component {
      render() {
          return (
            <div>
                <Navigasi {...this.props} />
                <BadanProfil/>
                <Footer/>
              </div>
            )
            };
      }

export default Profil