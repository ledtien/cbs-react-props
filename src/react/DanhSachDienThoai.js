import React, { Component } from "react";
import ItemDienThoai from "./ItemDienThoai";

export default class DanhSachDienThoai extends Component {
  renderDSDT = () => {
    return this.props.dsdt.map((item, index) => {
      return (
        <ItemDienThoai
          handleOnClick={this.props.handleSanPham}
          data={item}
          key={index}
          handleAddToCart={this.props.handleAddToCart}
        />
      );
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-around">{this.renderDSDT()}</div>
    );
  }
}
