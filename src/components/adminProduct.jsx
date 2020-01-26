import React from "react";
import "../styles/admin.css";
import "../styles/bootstrap.min.css";
import { FaTrashAlt, FaHome } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class AdminProduct extends React.Component {
  adminGoHome = () => {
    this.props.history.push("/admin/home");
  };
  render() {
    const list_product_admin = this.props.list_admin_product;
    return (
      <React.Fragment>
        <div>
          <div className="body_admin">
            <button onClick={() => this.adminGoHome()} class="button_back_home">
              <FaHome />
            </button>
            <h1 className="judul_admin_product">List Product</h1>
          </div>
          <table class="table table_product">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Detail</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {list_product_admin.map((isi, i) => (
                <tr>
                  <td>{isi.id}</td>
                  <td>
                    <img
                      class="preview_gambar"
                      src={isi.gambar_1}
                      alt="preview"
                    />
                  </td>
                  <td>{isi.item_name}</td>
                  <td>Rp {isi.price}</td>
                  <td>{isi.kategori}</td>
                  <td>
                    <button class="button_details">See Detail</button>
                  </td>
                  <td>
                    <button class="button_delete">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default connect("list_admin_product", actions)(withRouter(AdminProduct));
