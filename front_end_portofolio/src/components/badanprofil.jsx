import React from "react";
import '../styles/bootstrap.min.css';
import '../styles/badanprofil.css'
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import photo from '../images/patrick.png'
import { store, actions } from '../store';

class BodyProfile extends React.Component {

  componentDidMount = async ()=> {
		this.props.getUserDetail()
	}

  render() {
    
    const is_login = this.props.is_login;
    const info_profile = this.props.user_detail;
    console.log("cek isi info profile", info_profile)
    
    if (is_login === false) {
      return <Redirect to={{ pathname: "/signIn" }} />;
    } 
    else {
      return (
        <React.Fragment>
          <div className="container-fluid">
            <div className="row profileBody-row"> 
              <div className="col-md-4">
                <div className="kotak_foto_profil">
                  <div style={{textAlign:"center"}}>
                    <p>
                      <img style={{borderRadius:"10%", width:"50%", height:"50%", paddingTop:"10px"}} src={photo}></img>
                    </p>
                  </div>
                  <div style={{textAlign:"center"}}>
                    <p>Username : {info_profile.username}</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-1"></div> */}
              <div className="col-md-7">
                <div className="info_profil" style={{border:"1px solid black", backgroundColor:"#7F7D7E", color:"beige"}}>
                  <div className='col-md-12'>
                    <p className='name' style={{
                        textAlign: 'center',fontSize:"35px", paddingTop:"15px"
                      }}> Profile
                    </p>
                  </div>
                  <div style={{display:"flex", marginBottom:"25px"}}>
                    <div className="col-md-3 col-sm-1"></div>
                    <div className="col-md-6 col-sm-10" style={{borderTop:"1px solid black"}}></div>
                    <div className="col-md-3 col-sm-1"></div>
                  </div>
                  <div className='col-md-12' style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-2 info_user">
                      <p className='text_profil' style={{
                          textAlign: 'left', paddingLeft:"20px"
                        }}> Name
                      </p>
                    </div>
                    <div className="col-md-7 col-sm-6 keterangan_profil">
                      <p className='text_profil' style={{
                        textAlign: 'left'
                        }}> : {info_profile.first_name} {info_profile.last_name} 
                      </p>
                    </div>
                  </div>
                  <div className='col-md-12' style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-2 info_user">
                      <p className='text_profil' style={{
                          textAlign: 'left', paddingLeft:"20px"
                        }}> Gender
                      </p>
                    </div>
                    <div className="col-md-7 col-sm-6 keterangan_profil">
                      <p className='text_profil' style={{
                        textAlign: 'left'
                        }}> : {info_profile.gender}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-12' style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-2 info_user">
                      <p className='text_profil' style={{
                          textAlign: 'left', paddingLeft:"20px"
                        }}> Date of Birth
                      </p>
                    </div>
                    <div className="col-md-7 col-sm-6 keterangan_profil">
                      <p className='text_profil' style={{
                        textAlign: 'left'
                        }}> : {info_profile.date_of_birth}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-12' style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-2 info_user">
                      <p className='text_profil' style={{
                          textAlign: 'left', paddingLeft:"20px"
                        }}> Email
                      </p>
                    </div>
                    <div className="col-md-7 col-sm-6 keterangan_profil">
                      <p className='text_profil' style={{
                        textAlign: 'left'
                        }}> : {info_profile.email}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-12' style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-2 info_user">
                      <p className='text_profil' style={{
                          textAlign: 'left', paddingLeft:"20px"
                        }}> Phone Number
                      </p>
                    </div>
                    <div className="col-md-7 col-sm-6 keterangan_profil">
                      <p className='text_profil' style={{
                        textAlign: 'left'
                        }}> : {info_profile.phone_number} 
                      </p>
                    </div>
                  </div>
                  <div className='col-md-12' style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-2 info_user">
                      <p className='text_profil' style={{
                          textAlign: 'left', paddingLeft:"20px"
                        }}> Address 
                      </p>
                    </div>
                    <div className="col-md-7 col-sm-6 keterangan_profil">
                      <p className='text_profil' style={{
                        textAlign: 'left'
                        }}> : {info_profile.address} 
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  };
}
export default connect("user_detail,is_login, email, photo, username",actions)(withRouter(BodyProfile));