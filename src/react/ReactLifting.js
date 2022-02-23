import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import { danhSachDienThoai } from "./data";
import ModalCart from "./ModalCart";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class ReactLifting extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
    cart: [],
  };

  handleSanPhamChiTiet = (sanpham) => {
    this.setState({
      sanPhamChiTiet: sanpham,
    });
  };

  handleAddToCart = (sanpham) => {
    let cloneCart = [...this.state.cart];
    let indexItemCart = this.state.cart.findIndex((item) => {
      return item.maSP === sanpham.maSP;
    });

    if (indexItemCart == -1) {
      sanpham.count = 1;
      cloneCart.push(sanpham);
    } else {
      sanpham.count++;
    }
    this.setState({
      cart: cloneCart,
    });
  };

  handleCountButton = (id, type) => {
    let cloneItemCart = [...this.state.cart];
    let indexItemCart = this.state.cart.findIndex((item) => {
      return item.maSP == id;
    });
    if (indexItemCart !== -1 && type == 1) {
      cloneItemCart[indexItemCart].count++;
    }
    if (indexItemCart !== -1 && type == -1) {
      if (cloneItemCart[indexItemCart].count === 1) {
        cloneItemCart.splice(indexItemCart, 1);
      } else {
        cloneItemCart[indexItemCart].count--;
      }
    }

    this.setState({
      cart: cloneItemCart,
    });
  };

  render() {
    return (
      <div>
        <ModalCart
          cartData={this.state.cart}
          handleCountButton={this.handleCountButton}
        />
        <DanhSachDienThoai
          handleSanPham={this.handleSanPhamChiTiet}
          dsdt={danhSachDienThoai}
          handleAddToCart={this.handleAddToCart}
        />
        <SanPhamChiTiet data={this.state.sanPhamChiTiet} />
      </div>
    );
  }
}
