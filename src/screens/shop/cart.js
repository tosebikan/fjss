import * as React from "react";
import HeroImage from "../../assets/images/home_hero.jpg";
import "./cart.css";

import { CartContext } from "../../context/cart_context";
import { IoBagRemove } from "react-icons/io5";

function Cart() {
  const { cart, setCart } = React.useContext(CartContext);

  let subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  let shipping = 20;
  let total = subtotal + shipping;
  console.log({ total });

  const handleRemove = product => {
    let filter = cart.filter(el => el.id !== product.id);
    setCart(filter);
  };
  return (
    <div className="cart_container">
      <div className="cart_hero">
        <img src={HeroImage} alt="" />
        <div className="cart_hero_text">
          <h2>Cart</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="cart">
        <table>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cart.map(el => {
            let subtotal = el.quantity * el.price;
            return (
              <tr key={el.id}>
                <td>
                  <div className="cart_column">
                    <img src={el.image} alt="" className="cart_image" />
                    <div
                      className="cart_card_icon_cont"
                      onClick={() => handleRemove(el)}
                    >
                      <IoBagRemove className="cart_card_icon remove " />
                    </div>
                  </div>
                </td>
                <td className="card_title">{el.title}</td>
                <td>${el.price.toFixed(2)}</td>
                <td className="cart_quantity">{el.quantity}</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
            );
          })}

          <tr>
            <td colSpan="5" className="coupon_row">
              <input placeholder="Coupon code" />
              <button> Apply coupon</button>
            </td>
          </tr>
        </table>
      </div>

      <div className="cart_total">
        <div className="total_group">
          <h2>Cart Totals</h2>
          <table className="total_table">
            <tr>
              <th>Subtotal </th>
              <th className="subtotal">$ {subtotal.toFixed(2)}</th>
            </tr>
            <tr className="shipping_row">
              <td>Shipping</td>
              <td>$ {shipping.toFixed(2)}</td>
            </tr>
            <tr className="total_row">
              <td>Total</td>
              <td>$ {total.toFixed(2)}</td>
            </tr>
          </table>
          <button className="checkout_button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
