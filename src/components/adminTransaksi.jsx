import React from "react";
import "../styles/admin.css";
import "../styles/bootstrap.min.css";
import { FaTrashAlt, FaHome } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class AdminTransaksi extends React.Component {
  adminGoHome = () => {
    this.props.history.push("/admin/home");
  };
  render() {
    const list_transaksi_admin = this.props.list_admin_transaksi;
    var currencyFormatter = require("currency-formatter");
    return (
      <React.Fragment>
        <div>
          <div className="body_admin_transaksi">
            <button onClick={() => this.adminGoHome()} class="button_back_home">
              <FaHome />
            </button>
            <h1 className="judul_admin">List Transaction</h1>
          </div>
          <table class="table table_product">
            <thead>
              <tr>
                <th>Id</th>
                <th>User id</th>
                <th>status</th>
                <th>Total Item</th>
                <th>Total Harga</th>
                <th>Created At</th>
                <th>Remove History</th>
              </tr>
            </thead>
            <tbody>
              {list_transaksi_admin.map((isi, i) => (
                <tr>
                  <td>{isi.id}</td>
                  <td>{isi.user_id}</td>
                  <td>{isi.status ? "Lunas" : "Belum Lunas"}</td>
                  <td>{isi.total_item}</td>
                  <td>Rp {currencyFormatter.format(isi.total_harga,
                    {
                      code: "IDR",
                      symbol: ""
                    }
                  )}</td>
                  <td>{isi.created_at}</td>
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

export default connect(
  "list_admin_transaksi",
  actions
)(withRouter(AdminTransaksi));
