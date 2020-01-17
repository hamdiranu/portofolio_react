import React, { Component } from 'react';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import ListItem from '../components/listItemKategori';
import '../styles/listItem.css';

class Profil extends Component {
  render() {
    return (
      <div>
        <Navigasi {...this.props} />
        <ListItem />
        <Footer />
      </div>
    );
  }
}

export default Profil;
