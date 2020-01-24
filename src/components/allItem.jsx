import React from "react";
import "../styles/footer.css";
import "../styles/bootstrap.min.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class AllItem extends React.Component {
  componentDidMount = async () => {
    this.props.getAllProduct();
  };

  render() {
    const list_all_product = this.props.listAllProduct;

    return (
      <div class="container">
        <div className="row">
          {list_all_product.map((isi, i) => (
            <div className="col-md-3">
              <div className="kotak_barang">
                <div className="col-md-12">
                  <Link className="underlineHover" to={`/product/${isi.id}`}>
                    <img
                      style={{ borderRadius: "10px" }}
                      src={isi.gambar_1}
                      className="fotoBarang"
                      alt=""
                    />
                  </Link>
                </div>
                <div
                  className="col-md-12"
                  style={{ paddingBottom: "10px", paddingTop: "10px" }}
                >
                  <span>Rp {isi.price}</span>
                </div>
                <div className="col-md-12">
                  <span>{isi.item_name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect("listAllProduct", actions)(withRouter(AllItem));
