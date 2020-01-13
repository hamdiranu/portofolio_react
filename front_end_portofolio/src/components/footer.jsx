import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';
import fb from '../images/facebook.png';
import tw from '../images/twitter.png';
import dr from '../images/dribbble.png';
import lin from '../images/linkedIn.png';
import logo from '../images/logoM.png';
import { Link } from 'react-router-dom';

function Footer () {
  return (
    // <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <h6 style={{fontWeight:'bold'}} >About Us</h6>
            <p></p>
            <p class="text-justify">Teman Jalan is here to provide cutting-edge information regarding tourist areas which are equipped with airplane ticket booking facilities that are ready to spoil you without having to go in and out of different applications. We are always ready to accompany your trip.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <Link to="/">
              <img class='footer-logo' style={{width:'80%', marginLeft: "19%", marginTop: "-20px"}} src={logo}></img>
            </Link>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div style={{ marginTop:'20px'}} class="col-md-9 col-sm-6 col-xs-12">
              <p class="copyright-text" style={{textAlign: "center"}}>Copyright &copy; 2020 All Rights Reserved by <Link to="/">manggaleh.com</Link></p>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a src={fb} class="facebook" href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook">fb</i></a></li>
                <li><a src={tw} class="twitter" href="https://twitter.com" target="_blank"><i class="fa fa-twitter">tw</i></a></li>
                <li><a src={dr} class="dribbble" href="https://dribbble.com" target="_blank"><i class="fa fa-dribbble">dr</i></a></li>
                <li><a src={lin} class="linkedin" href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin">lin</i></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )  
}

export default Footer;