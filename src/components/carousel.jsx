import React from 'react';
import '../styles/masuk.css';
import '../styles/carousel.css';
import '../styles/bootstrap.min.css';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2a.jpg';
import slider3 from '../images/slider3.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';

class Carousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Link to="/search/item">
              <img
                onClick={e => this.props.sliderInputKategori('ELEKTRONIK')}
                class="d-block w-100 img_carousel"
                src={slider1}
                alt="First slide"
              />
            </Link>
          </div>
          <div class="carousel-item">
            <img
              onClick={e => this.props.sliderInputKategori('OTOMOTIF')}
              class="slider2 d-block"
              src={slider2}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <Link to="/search/item">
              <img
                onClick={e => this.props.sliderInputKategori('FASHION')}
                class="d-block w-100 img_carousel"
                src={slider3}
                alt="Third slide"
              />
            </Link>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default connect(
  'token, username, user_id, password, is_login',
  actions
)(withRouter(Carousel));
