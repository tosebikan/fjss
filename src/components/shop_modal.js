/* @flow weak */

import React from "react";
import "./shop_modal.css";
import prod from "../assets/images/shop/5.png";

const ShopModal = props => (
  <div className="shop_modal_container">
    <div className="shop_modal_close" onClick={props.onClose}>
      X
    </div>
    <div className="shop_modal_left">
      <img src={prod} alt="" />
    </div>
    <div className="shop_modal_right">
      <h2> {props.data.title}</h2>
      <p className="price">${props.data.price.toFixed(2)}</p>
      <form className="shop_modal_form">
        <input type="number" defaultValue={1} onChange={props.onChange} />
        <button onClick={props.onAdd}>Add to cart</button>
      </form>
      <p> Category: {props.category}</p>
    </div>
  </div>
);

export default ShopModal;
