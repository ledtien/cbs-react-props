import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    return (
      <div className="container d-flex mt-5">
        <div>
          <img src={this.props.data.hinhAnh} />
        </div>
        <div>
          <p>System OS: {this.props.data.heDieuHanh}</p>
          <p>Name: {this.props.data.tenSP}</p>
          <p>Price: {this.props.data.giaBan}</p>
        </div>
      </div>
    );
  }
}
