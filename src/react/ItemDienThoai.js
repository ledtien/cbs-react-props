import React, { Component } from "react";

export default class ItemDienThoai extends Component {
  render() {
    let { tenSP, hinhAnh } = this.props.data;
    let { handleOnClick, handleAddToCart } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={hinhAnh} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{tenSP}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                handleOnClick(this.props.data);
              }}
              className="btn btn-primary"
            >
              Detail
            </button>
            <button
              onClick={() => {
                handleAddToCart(this.props.data);
              }}
              className="btn btn-success ml-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
