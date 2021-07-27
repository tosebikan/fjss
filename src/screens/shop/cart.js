import HeroImage from "../../assets/images/home_hero.jpg";
import "./cart.css";
import prod1 from "../../assets/images/prod1.jpg";
import prod2 from "../../assets/images/prod2.jpg";
import { FaFacebook } from "react-icons/fa";

const cart = [
  {
    id: 1,
    title: "Scottish History: The West Lothian Connection",
    type: "Ebook",
    price: 5.0,
    image: prod1,
    quantity: 1
  },
  {
    id: 2,
    title: "Scottish History: The West Lothian Connection ",
    type: "Ebook",
    price: 5.0,
    image: prod2,
    quantity: 2
  },
  {
    id: 3,
    title: "Scottish History: The West Lothian Connection",
    type: "Ebook",
    price: 5.0,
    image: prod1,
    quantity: 1
  }
];

let subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
let shipping = 20;
let total = subtotal + shipping;
console.log({ total });

function Cart() {
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
                    <button className="cart_button">
                      <FaFacebook className="cart_button" />
                    </button>
                  </div>
                </td>
                <td className="card_title">{el.title}</td>
                <td>$ {el.price.toFixed(2)}</td>
                <td>{el.quantity}</td>
                <td>$ {subtotal.toFixed(2)}</td>
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
