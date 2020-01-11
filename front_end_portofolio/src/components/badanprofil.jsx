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
    return <Redirect to={{ pathname: "/masuk" }} />;
  } else {
    return (
      <React.Fragment>
        <section className="content">
          <div className="container">
              <div className="row profileBody-row">
                  <div className="col-md-3"></div>
                  <div className='col-md-3 profile-pic'>
                    <p style={{
                        textAlign: "right",
                        marginTop: '50px'
                      }}>
                      <img style={{ width:'100%', marginTop:'-36px' }} src={photo}></img>
                    </p>
                  </div>
                  <div className='col-md-6'>
                      <div className='col-md-12'>
                          <p className='name' style={{
                              textAlign: 'left',
                              marginTop: '150px',
                              marginTop: '190px'
                            }}>
                            <label></label> {full_name}
                          </p>
                      </div>
                      <div className='col-md-12'>
                          <p className='email' style={{
                              textAlign: 'left',
                              marginTop: '40px',
                              marginLeft: '7px'
                            }}>
                            <label></label> {email}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
};

export default connect("is_login, email, photo, username",actions)(withRouter(BodyProfile));