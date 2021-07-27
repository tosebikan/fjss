import HeroImage from "../../assets/images/home_hero.jpg";
import "./cart.css";
import prod1 from "../../assets/images/prod1.jpg";
import { FaFacebook } from "react-icons/fa";

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
          <tr>
            <td>
              <div className="cart_column">
                <img src={prod1} alt="" className="cart_image" />
                <button className="cart_button">
                  <FaFacebook className="cart_button" />
                </button>
              </div>
            </td>
            <td className="card_title">
              Scottish History: The West Lothian Connection
            </td>
            <td>$ 5.00</td>
            <td>1</td>
            <td>$ 5.00</td>
          </tr>

          <tr>
            <td colspan="5" className="coupon_row">
              <input placeholder="Coupon code" />
              <button> Apply coupon</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Cart;
