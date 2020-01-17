import React from 'react';
import '../styles/daftar.css';
import '../styles/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Form, Row, Col } from 'react-bootstrap';

class SignUp extends React.Component {
  signUp = async () => {
    await this.props.handleSignUp();
    this.props.history.push('/');
  };

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    console.log('cek state', this.props);
    return (
      <div className="wrapper fadeInDown">
        <div id="formRegister">
          <Form onSubmit={this.submitHandler} style={{ paddingTop: '10px' }}>
            {/* <div className style={{textAlign:"center"}}></div> */}
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Username :
              </Form.Label>
              <Col md="5" sm="10">
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="username"
                  placeholder="Username"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Name :
              </Form.Label>
              <Col style={{ display: 'flex' }} md="7" sm="10">
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="first_name"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="last_name"
                  placeholder="Last Name"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Gender :
              </Form.Label>
              <Col style={{ display: 'flex' }} md="8" sm="12" className="form_gender">
                <div className="form-check form-check-inline">
                  <input
                    onClick={e => this.props.changeInput(e)}
                    type="radio"
                    name="gender"
                    value="Male"
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={e => this.props.changeInput(e)}
                    type="radio"
                    name="gender"
                    value="Female"
                  />
                  <label className="form-check-label">Female</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={e => this.props.changeInput(e)}
                    type="radio"
                    name="gender"
                    value="Others"
                  />
                  <label className="form-check-label">Others</label>
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Date Of Birth :
              </Form.Label>
              <Col md="5" sm="10">
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="date_of_birth"
                  placeholder="Date of Birth"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Address :
              </Form.Label>
              <Col md="4" sm="10">
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="address"
                  className="addressBar"
                  style={{ width: '90%' }}
                  placeholder="Address"
                />
              </Col>
              <Col md="4" sm="12">
                <Form.Label column md="4" sm="1">
                  City :{' '}
                </Form.Label>
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="city"
                  style={{ width: '50%' }}
                  placeholder="City"
                />
                <Form.Label column md="4" sm="1">
                  Zip Code :{' '}
                </Form.Label>
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="zip_code"
                  style={{ width: '50%' }}
                  placeholder="Zip Code"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Phone Number :
              </Form.Label>
              <Col md="5" sm="10">
                <input
                  type="text"
                  onChange={e => this.props.changeInput(e)}
                  name="phone_number"
                  placeholder="Username"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Password :
              </Form.Label>
              <Col style={{ display: 'flex' }} md="7" sm="10">
                <input
                  type="password"
                  onChange={e => this.props.changeInput(e)}
                  name="password"
                  placeholder="Password"
                />
                <input type="password" placeholder="Konfirmasi Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formUsername">
              <Form.Label column md="1" sm="1"></Form.Label>
              <Form.Label column md="2" sm="1">
                Email :
              </Form.Label>
              <Col style={{ display: 'flex' }} md="7" sm="12">
                <input
                  type="email"
                  onChange={e => this.props.changeInput(e)}
                  name="email"
                  className="emailInput"
                  placeholder="Email"
                />
                <input type="email" placeholder="Konfirmasi Email" />
              </Col>
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I Agree to The Terms and Conditions"
                style={{ marginTop: '10px' }}
              />
            </Form.Group>
            <input type="submit" className="fadeIn fourth" value="Register" onClick={this.signUp} />
          </Form>
          <div style={{ marginBottom: '10px' }}>
            <span>
              Already have an account?{' '}
              <Link className="underlineHover" to="/signin">
                Sign in
              </Link>{' '}
              now
            </span>
          </div>
          <div id="formFooter">
            <Link className="underlineHover" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  'username, first_name, last_name, gender, date_of_birth, address, city, zip_code, phone_number, password, email, is_login',
  actions
)(withRouter(SignUp));
