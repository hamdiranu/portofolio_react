import React from "react";
import "../styles/footer.css";
import "../styles/bootstrap.min.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class AllItem extends React.Component {
  /**
  * Fungsi untuk mendapatkan data semua produk
  */
  componentDidMount = async () => {
    this.props.getAllProduct();
  };

  render() {
    const list_all_product = this.props.list_all_product;
    var currencyFormatter = require("currency-formatter");
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
                  <span className="hargaAll">Rp {currencyFormatter.format(isi.price,
                    {
                      code: "IDR",
                      symbol: ""
                    }
                  )}
                  </span>
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
export default connect("list_all_product", actions)(withRouter(AllItem));
