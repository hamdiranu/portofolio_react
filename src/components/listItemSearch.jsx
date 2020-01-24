import React from "react";
import "../styles/footer.css";
import "../styles/bootstrap.min.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Form } from "react-bootstrap";

class listItemKategori extends React.Component {
  componentDidMount = async () => {
    // Jika kotak pencarian kosong, akan mengambil semua item
    if (this.props.item_search === "") {
      this.props.getAllProduct();
    }
    // Jika kotak pencarian tidak kosong
    else {
      this.props.getSearchProduct();
    }
  };

  render() {
    var list_product;
    // Untuk menfilter item berdasarkan kategori
    if (this.props.item_search === "") {
      this.props.getSearchProduct();
      list_product = this.props.listAllProduct.filter(
        element => element.kategori === this.props.kategori
      );
    } else {
      this.props.getSearchProduct();
      list_product = this.props.listSearchProduct;
    }

    console.log("cek list search", list_product);

    return (
      <div className="container-fluid">
        <div className="row profileBody-row">
          <div className="col-md-4">
            <div className="kotak_kategori">
              <div style={{ textAlign: "center" }}>
                <h3>Kategori</h3>
              </div>
              <Form style={{ paddingTop: "10px", textAlign: "center" }}>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInputKategori(e)}
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="ELEKTRONIK"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Elektronik
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInputKategori(e)}
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="FASHION"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Fashion
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onClick={e => this.props.changeInputKategori(e)}
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="OTOMOTIF"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    Otomotif
                  </label>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-md-7" style={{ borderLeft: "1px solid grey" }}>
            <div className="row" style={{ display: "flex", marginTop: "20px" }}>
              {list_product.map((isi, i) => (
                <div className="col-md-4">
                  <div className="kotak_barang">
                    <div className="col-md-12" style={{ marginBottom: "10px" }}>
                      <Link
                        className="underlineHover"
                        to={`/product/${isi.id}`}
                      >
                        <img
                          style={{ borderRadius: "10px" }}
                          src={isi.gambar_1}
                          className="fotoBarang"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
        </div>
      </div>
    );
  }
}
export default connect(
  "listAllProduct, item_search, kategori, listSearchProduct",
  actions
)(withRouter(listItemKategori));
