import React from 'react';
import '../styles/navigasi.css';
import '../styles/bootstrap.min.css'
import logo from '../images/navigasi-logo.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'

class Navigasi extends React.Component {

    // fungsi untuk mengeluarkan tampilan saat search bar diinput
    handleSearchContent=(e)=>{
        this.props.handleSearch(e)
    }

    cariKotaData = async (event) => {
        // console.log("cek params", this.props)
        const kota = this.props.idKota;
        // console.log("KOTAAAAAAAAAA", kota)
        await this.props.kategoriKota(kota);
        this.props.history.push("/listdestinasi");
    }

    handleSignOut = async () => {
        await store.setState({is_login:false});
        // console.warn('cek log out', this.props.is_login)
        this.props.history.push("/masuk");
      };

    render (){
        
        if (this.props.is_login){
            return (
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1">
                                <img className="logo-react" src={logo} alt="" />
                            </div>
                        <div className="col-md-1 logo-name">
                            <Link to='/' style={{textDecoration:"none" }}> 
                            <h3 style={{ color:'black'}}>temanjalan</h3>
                            </Link>
                        </div>
                        <div className='col-md-1'></div>
                        <div className="col-md-6 search">
                
                            <form onSubmit={e => e.preventDefault()} class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" 
                                style={{ width:"300px"}} 
                                type="search" 
                                placeholder="Search Your Destination City" 
                                aria-label="Search"
                                id="idKota"
                                name="idKota"
                                onChange={event => this.props.handleSearch(event)}/>
                                <button class="btn btn-info my-sm-0" 
                                type="submit"
                                onClick={() => this.cariKotaData()}
                                >Search</button>
                            </form>
    
                        </div>
                        <div className="col-md-2 user_in">
                            <nav>
                                <ul className="list-unstyled navigate" style={{ textDecoration:'none'}}> 
                                    <li className="navi1" >
                                        <Link to="/profil" style={{ fontSize: "large", color:'black', textDecoration:'none'}}>Profile</Link></li>
                                    <li className="navi1">
                                        <Link style={{ fontSize: "large", color:'black', textDecoration:'none'}}
                                        onClick={this.handleSignOut}>Log Out</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            )
        } else {
            return (
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-1">
                                <img className="logo-react" src={logo} alt="" />
                            </div>
                            <div className="col-md-1 logo-name">
                                <Link to='/' style={{textDecoration:"none" }}> 
                                <h3 style={{ color:'black'}}>temanjalan</h3>
                                </Link>
                            </div>
                            <div className='col-md-1'></div>
                            <div className="col-md-6 search">
                    
                                <form onSubmit={e => e.preventDefault()} class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" 
                                    style={{ width:"300px"}} 
                                    type="search" 
                                    placeholder="Search Your Destination City" 
                                    aria-label="Search"
                                    id="idKota"
                                    name="idKota"
                                    onChange={event => this.props.handleSearch(event)}/>
                                    <button class="btn btn-info my-sm-0" 
                                    type="submit"
                                    onClick={() => this.cariKotaData()}
                                    >Search</button>
                                </form>
        
                            </div>
                            <div className="col-md-2 user_in">
                                <nav>
                                    <ul className="list-unstyled navigate" style={{ textDecoration:'none'}}> 
                                        <li className="navi1" >
                                            <Link to="/profil" style={{ fontSize: "large", color:'black', textDecoration:'none'}}>Profile</Link></li>
                                        <li className="navi1">
                                            <Link to='/signIn' style={{ fontSize: "large", color:'black', textDecoration:'none'}}
                                            >Log In</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                )
        }
        

    }
}

export default connect("is_login, isLoading, search, idKota",actions)(withRouter(Navigasi));