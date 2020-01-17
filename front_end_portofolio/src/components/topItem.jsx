import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';

function ItemTop() {
  return (
    <div class="container">
      <div class="carousel slide" data-ride="carousel" id="multi_item">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/install-sublime-on-ubunut.jpeg"
                  alt="1 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/boostrap-datetimepicker.jpeg"
                  alt="2 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/laravel-razorpay-payment.jpeg"
                  alt="3 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/laravel-razorpay-payment.jpeg"
                  alt="4 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/laravel-razorpay-payment.jpeg"
                  alt="5 slide"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/install-sublime-on-ubunut.jpeg"
                  alt="6 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/boostrap-datetimepicker.jpeg"
                  alt="7 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/laravel-razorpay-payment.jpeg"
                  alt="8 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/laravel-razorpay-payment.jpeg"
                  alt="9 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  class="d-block w-100"
                  src="//www.tutsmake.com/wp-content/uploads/2019/03/laravel-razorpay-payment.jpeg"
                  alt="10 slide"
                />
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#multi_item" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#multi_item" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default ItemTop;
