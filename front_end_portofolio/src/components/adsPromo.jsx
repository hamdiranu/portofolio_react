import React from 'react';
import '../styles/masuk.css';
import '../styles/bootstrap.min.css';
import gambar1 from '../images/sliderNoMovement1.jpg';
import gambar2 from '../images/sliderNoMovement2.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';

class Promo extends React.Component {
  render() {
    return (
      <div className="col-md-4 jarak_promo">
        <div>
          <Link to="/search/item">
            <img
              onClick={e => this.props.sliderInputKategori('ELEKTRONIK')}
              style={{ width: '150%', height: '171px' }}
              src={gambar1}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/search/item">
            <img
              onClick={e => this.props.sliderInputKategori('ELEKTRONIK')}
              style={{ width: '100%', height: '171px' }}
              src={gambar2}
              alt=""
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default connect('token, username, user_id, password, is_login', actions)(withRouter(Promo));
