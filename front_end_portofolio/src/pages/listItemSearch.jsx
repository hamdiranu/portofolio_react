import React, { Component } from 'react';
import Navigasi from '../components/navigasi';
import Footer from '../components/footer';
import ListItem from '../components/listItemSearch';
import dummyBarang from '../images/dummy_barang.png';
import '../styles/listItem.css';
import { Form, Row, Col, ButtonGroup, Input, Button } from "react-bootstrap";


class Profil extends Component {
  // componentDidMount = () =>{
  //   const paramKota = this.props.match.params.kota
  //   store.setState({ idKota:paramKota });
  //   this.props.kategoriKota()
  // }
  render() {
    return (
      <div>
        <Navigasi {...this.props} />
        <ListItem/>
        <Footer/>
      </div>
    )
  };
}

export default Profil