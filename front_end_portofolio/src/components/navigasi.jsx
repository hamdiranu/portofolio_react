import React from 'react';
import '../styles/navigasi.css';
import '../styles/bootstrap.min.css'
import logo from '../images/logoM.png'
import profileLogo from '../images/profile_icon2.png'
import cartLogo from '../images/cart_icon2.png'
import homeLogo from '../images/home_icon5.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'

class Navigasi extends React.Component {

    // fungsi untuk mengeluarkan tampilan saat search bar diinput
    handleSearchContent=(e)=>{
        this.props.handleSearch(e)
    }

    handleSignOut = async () => {
        await store.setState({is_login:false});
        // console.warn('cek log out', this.props.is_login)
        this.props.history.push("/");
      };

    render (){
        
        if (this.props.is_login){
            return (
            <Navbar fixed="top" className="navbar_react" collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="#home"><img className="logo-react" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Brand href="#home">Manggaleh.com</Navbar.Brand>
                <Navbar.Brand className="mr-lg-5" href="#home"><Link to='/' style={{textDecoration:"none" }}> 
                        <h3 style={{ color:'black'}}><img className="logo-react" src={homeLogo} alt="" /></h3>
                        </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline>
                    <select class="custom-select">
                        <option selected>Semua Kategori</option>
                        <option value="1">Elektronik</option>
                        <option value="2">Fashion</option>
                        <option value="3">Otomotif</option>
                    </select>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="secondary" >Search</Button>
                    </Form>
                </Navbar.Collapse>
                <Navbar.Brand href="#home"><img className="mr-lg-4 logo-react" src={cartLogo} alt="" /></Navbar.Brand>
                <ButtonGroup aria-label="Third group">
                    <Button variant="outline-secondary"><Link style={{color:'black', textDecoration:'none'}}
                        onClick={this.handleSignOut}>Log Out</Link></Button>
                </ButtonGroup>
                <Navbar.Brand ><Link to="/profil"><img className="logo-react" src={profileLogo} alt="" /></Link></Navbar.Brand>
            </Navbar>
            )
        } else {
            return (
                <Navbar fixed="top" className="navbar_react" collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Brand href="#home"><img className="logo-react" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Brand href="#home">Manggaleh.com</Navbar.Brand>
                    <Navbar.Brand className="mr-lg-5" href="#home"><Link to='/' style={{textDecoration:"none" }}> 
                        <h3 style={{ color:'black'}}><img className="logo-react" src={homeLogo} alt="" /></h3>
                        </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form inline>
                        <select class="custom-select">
                            <option selected>Semua Kategori</option>
                            <option value="1">Elektronik</option>
                            <option value="2">Fashion</option>
                            <option value="3">Otomotif</option>
                        </select>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="secondary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <ButtonGroup className="mr-lg-4" aria-label="Second group">
                        <Button variant="outline-secondary"><Link to="/profil" style={{color:'black', textDecoration:'none'}}>Sign Up</Link></Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                        <Button variant="outline-secondary"><Link to="/profil" style={{color:'black', textDecoration:'none'}}>Sign In</Link></Button>
                    </ButtonGroup>
                    <Navbar.Brand ><Link to="/profil"><img className="logo-react" src={profileLogo} alt="" /></Link></Navbar.Brand>
                </Navbar>
                )
        }
        

    }
}

export default connect("is_login, isLoading, search, idKota",actions)(withRouter(Navigasi));