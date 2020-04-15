import React from "react";
import "../styles/footer.css";
import "../styles/bootstrap.min.css";
import { FaUsersCog } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class AdminHome extends React.Component {
  /**
  * Fungsi untuk berpindah ke halaman daftar detail produk
  */
  adminGoItem = () => {
    this.props.history.push("/admin/product");
  };

  /**
  * Fungsi untuk berpindah ke halaman daftar detail user
  */
  adminGoUser = () => {
    this.props.history.push("/admin/user");
  };

  /**
  * Fungsi untuk berpindah ke halaman daftar detil transaksi
  */
  adminGoTransaction = () => {
    this.props.history.push("/admin/transaksi");
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          style={{
            backgroundColor: "white",
            textAlign: "center",
            marginTop: "135px"
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              paddingTop: "20px"
            }}
          >
            Welcome Back, Master
          </h1>
          <div className="row">
            <div className="col-md-4 col-sm12">
              <button onClick={() => this.adminGoItem()} className="admin_item">
                <FaLuggageCart />
              </button>
              <div>
                <h3>Items</h3>
              </div>
            </div>
            <div className="col-md-4 col-sm12">
              <button onClick={() => this.adminGoUser()} className="admin_user">
                <FaUsersCog />
              </button>
              <div>
                <h3>Users</h3>
              </div>
            </div>
            <div className="col-md-4 col-sm12">
              <button
                onClick={() => this.adminGoTransaction()}
                className="admin_transaction"
              >
                <FaScroll />
              </button>
              <div>
                <h3>Transactions</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(AdminHome));
