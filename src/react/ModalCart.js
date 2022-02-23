import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class ModalCart extends Component {
  state = {
    isOpen: false,
  };

  setVisible = (param) => {
    this.setState({
      isOpen: param,
    });
  };

  renderCart = () => {
    return this.props.cartData.map((item) => {
      let { tenSP, maSP, hinhAnh, giaBan, count } = item;
      return (
        <tr key={maSP}>
          <th>{maSP}</th>
          <td>{tenSP}</td>
          <td>
            <img style={{ width: "50px" }} src={hinhAnh} />
          </td>
          <td>{giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleCountButton(maSP, 1);
              }}
              className="btn btn-primary"
            >
              +
            </button>
            {count}
            <button
              onClick={() => {
                this.props.handleCountButton(maSP, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
        </tr>
      );
    });
  };

  renderTotalItemCart = () => {
    return this.props.cartData.reduce(function (total, data) {
      return total + data.count;
    }, 0);
  };

  render() {
    return (
      <div>
        <div className="m-3 d-flex justify-content-end">
          <Button type="primary" onClick={() => this.setVisible(true)}>
            Cart {this.renderTotalItemCart()}
          </Button>
        </div>
        <Modal
          title="Your Cart"
          centered
          visible={this.state.isOpen}
          onOk={() => this.setVisible(false)}
          onCancel={() => this.setVisible(false)}
          width={1000}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>{this.renderCart()}</tbody>
          </table>
        </Modal>
      </div>
    );
  }
}
