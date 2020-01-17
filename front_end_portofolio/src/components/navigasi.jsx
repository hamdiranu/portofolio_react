import React from 'react';
import '../styles/navigasi.css';
import '../styles/bootstrap.min.css';
import logo from '../images/logoM.png';
import profileLogo from '../images/profile_icon2.png';
import cartLogo from '../images/cart_icon2.png';
import homeLogo from '../images/home_icon5.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Navbar, Form, FormControl, Button, ButtonGroup } from 'react-bootstrap';

class Navigasi extends React.Component {
  // fungsi untuk mengeluarkan tampilan saat search bar diinput
  handleSearchContent = e => {
    this.props.handleSearch(e);
  };

  handleSignOut = async () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_login');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.props.history.push('/');
  };

  render() {
    if (localStorage.getItem('is_login')) {
      return (
        <Navbar
          fixed="top"
          className="navbar_react"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">
            <img className="logo-react" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Manggaleh.com</Navbar.Brand>
          <Navbar.Brand className="mr-lg-5" href="#home">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'black' }}>
                <img className="logo-react" src={homeLogo} alt="" />
              </h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form inline>
              <select
                onChange={e => this.props.changeInput(e)}
                name="kategori"
                class="custom-select"
              >
                <option value=" " selected>
                  All Category
                </option>
                <option value="ELEKTRONIK">Elektronik</option>
                <option value="FASHION">Fashion</option>
                <option value="OTOMOTIF">Otomotif</option>
              </select>
              <FormControl
                type="text"
                onChange={e => this.handleSearchContent(e)}
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="secondary">
                <Link to="/search/item">Search</Link>
              </Button>
            </Form>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">
            <Link to="/cart" style={{ color: 'black', textDecoration: 'none' }}>
              <img className="mr-lg-4 logo-react" src={cartLogo} alt="" />
            </Link>
          </Navbar.Brand>
          <ButtonGroup aria-label="Third group">
            <Button variant="outline-secondary">
              <Link style={{ color: 'black', textDecoration: 'none' }} onClick={this.handleSignOut}>
                Log Out
              </Link>
            </Button>
          </ButtonGroup>
          <Navbar.Brand>
            <Link to="/profil">
              <img className="logo-react" src={profileLogo} alt="" />
            </Link>
          </Navbar.Brand>
        </Navbar>
      );
    } else {
      return (
        <Navbar
          fixed="top"
          className="navbar_react"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">
            <img className="logo-react" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Manggaleh.com</Navbar.Brand>
          <Navbar.Brand className="mr-lg-5" href="#home">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'black' }}>
                <img className="logo-react" src={homeLogo} alt="" />
              </h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form inline>
              <select
                onChange={e => this.props.changeInput(e)}
                name="kategori"
                class="custom-select"
              >
                <option value=" " selected>
                  All Category
                </option>
                <option value="ELEKTRONIK">Elektronik</option>
                <option value="FASHION">Fashion</option>
                <option value="OTOMOTIF">Otomotif</option>
              </select>
              <FormControl
                type="text"
                onChange={e => this.handleSearchContent(e)}
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="secondary">
                <Link to="/search/item">Search</Link>
              </Button>
            </Form>
          </Navbar.Collapse>
          <ButtonGroup className="mr-lg-4" aria-label="Second group">
            <Button variant="outline-secondary">
              <Link to="/signUp" style={{ color: 'black', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button variant="outline-secondary">
              <Link to="/profil" style={{ color: 'black', textDecoration: 'none' }}>
                Sign In
              </Link>
            </Button>
          </ButtonGroup>
          <Navbar.Brand>
            <Link to="/profil">
              <img className="logo-react" src={profileLogo} alt="" />
            </Link>
          </Navbar.Brand>
        </Navbar>
      );
    }
  }
}

export default connect(
  'item_search, is_login, isLoading, search, idKota',
  actions
)(withRouter(Navigasi));
