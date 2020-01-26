import React from "react";
import "../styles/footer.css";
import "../styles/bootstrap.min.css";
import { FaTrashAlt, FaHome } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class AdminUser extends React.Component {
  adminGoHome = () => {
    this.props.history.push("/admin/home");
  };
  render() {
    const list_user_admin = this.props.list_admin_user;
    return (
      <React.Fragment>
        <div>
          <div className="body_admin">
            <button onClick={() => this.adminGoHome()} class="button_back_home">
              <FaHome />
            </button>
            <h1 className="judul_admin_user">List User</h1>
          </div>
          <table class="table table_product">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>City</th>
                <th>Created at</th>
                <th>Remove Account</th>
              </tr>
            </thead>
            <tbody>
              {list_user_admin.map((isi, i) => (
                <tr>
                  <td>{isi.id}</td>
                  <td>{isi.username}</td>
                  <td>{isi.email}</td>
                  <td>{isi.first_name}</td>
                  <td>{isi.last_name}</td>
                  <td>{isi.gender}</td>
                  <td>{isi.date_of_birth}</td>
                  <td>{isi.address}</td>
                  <td>{isi.city}</td>
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

export default connect("list_admin_user", actions)(withRouter(AdminUser));
