import React from 'react';
import '../styles/masuk.css';
import '../styles/bootstrap.min.css';
import gambar1 from '../images/sliderNoMovement1.jpg';
import gambar2 from '../images/sliderNoMovement2.jpg';

class Promo extends React.Component {

    render() {
        return (
            <div className="col-md-4 jarak_promo">
                <div>
                    <img style={{width:"100%", height:"171px"}} src={gambar1} alt=""/>
                </div>
                <div>
                    <img style={{width:"100%", height: "171px"}} src={gambar2} alt=""/>
                </div>
            </div>
        )
    }
}

export default Promo;