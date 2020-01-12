import React from "react";
import '../styles/bootstrap.min.css';
import '../styles/badanprofil.css'
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import photo from '../images/profil-main.jpg'
import { store, actions } from '../store';

const BodyProfile = props => {
  // console.warn("is_login", props);
  const is_login = props.is_login;
  const email = props.email;
  const full_name = props.username;
  if (is_login === false) {
    return <Redirect to={{ pathname: "/signIn" }} />;
  } else {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row profileBody-row"> 
            <div className="col-md-4">
              <div className="kotak_foto_profil" style={{border:"1px solid black"}}>
                <div style={{textAlign:"center"}}>
                  <p>
                    <img style={{borderRadius:"10%", width:"50%", height:"50%", paddingTop:"10px"}} src={photo}></img>
                  </p>
                </div>
                <div style={{textAlign:"center"}}>
                  <p>Username : AzukiMiho</p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-7">
              <div className="info_profil" style={{border:"1px solid black"}}>
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
                      }}> Username
                    </p>
                  </div>
                  <div className="col-md-7 col-sm-6 keterangan_profil">
                    <p className='text_profil' style={{
                      textAlign: 'left'
                      }}> : Anonymous 
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
                      }}> : Others
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
                      }}> : 01 / 01 / 2020
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
                      }}> : Anonymous@alterra.id
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
                      }}> : 0812xxxxxxxx 
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
                      }}> : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ex ea commodo consequat. 
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

export default connect("is_login, email, photo, username",actions)(withRouter(BodyProfile));