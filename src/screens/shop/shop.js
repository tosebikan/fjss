import React from "react";
import HeroImage from "../../assets/images/home_hero.jpg";
import "./shop.css";

// import gallery1 from "../../assets/images/gallery1.png";
import { FiSearch } from "react-icons/fi";
import { products, news } from "../../helpers/data";
import ShopModal from "../../components/shop_modal";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { CartContext } from "../../context/cart_context";
import { apiFunctions } from "../../helpers/api";

// let placeholder = products;

function Shop() {
  const [shopProducts, setShopProduct] = React.useState([]);
  const [placeholder, setPlaceholder] = React.useState([]);
  const [shopModal, setShopModal] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState({});
  const [productQuantity, setProductQuantity] = React.useState(1);
  const { cart, setCart } = React.useContext(CartContext);
  // console.log({ cart, productQuantity });

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let res = await apiFunctions.getProducts();
    setShopProduct(res);
    setPlaceholder(res);
  };

  const handleSearch = e => {
    let prod = placeholder.filter(el => {
      return el.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    // console.log(prod);
    setShopProduct(prod);
  };

  const addToCart = (e, product) => {
    e.preventDefault();
    console.log("PRODUCT", product);
    // add product quantity
    product.quantity = productQuantity;

    let present = checkCart(product);

    if (!present) {
      setCart([...cart, product]);
    }

    if (present) {
      let update = cart.map(el => {
        if (el.id === product.id) {
          el.quantity = productQuantity;
        }
        return el;
      });

      setCart(update);
    }
  };

  const remove = (e, product) => {
    e.preventDefault();
    let filter = cart.filter(el => el.id !== product.id);
    setCart(filter);
  };

  // check if product in cart
  const checkCart = product => {
    let present = cart.filter(el => el.id === product.id);
    if (present.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="shop_container">
      <div className="shop_hero">
        <img src={HeroImage} alt="" />
        <div className="shop_hero_text">
          <h2>Shop</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {shopModal && (
        <div className="shop_modal_contaier">
          <ShopModal
            onClose={() => setShopModal(!shopModal)}
            data={currentProduct}
            onChange={e => setProductQuantity(e.target.value)}
            onAdd={e => {
              if (checkCart(currentProduct)) {
                remove(e, currentProduct);
              } else {
                addToCart(e, currentProduct);
              }
            }}
            buttonTitle={checkCart(currentProduct) ? "remove" : "Add to cart"}
          />
        </div>
      )}

      <div className="shop">
        <div className="shop_menu">
          <form className="shop_form">
            <div className="shop_form_row">
              <input placeholder="search" onChange={handleSearch} />
              <FiSearch className="shop_icon" />
            </div>
            <div className="shop_range_row">
              <label>Filter by price</label>
              <div className="range_slider">
                <input
                  type="range"
                  name="price-min"
                  id="price-min"
                  // value="200"
                  // min="0"
                  // max="1000"
                />
                <input
                  type="range"
                  name="price-max"
                  // id="price-max"
                  // value="800"
                  // min="0"
                  // max="1000"
                />
              </div>
            </div>
            <div className="shop_form_button_row">
              <button>Filter </button>
              <p>Price: $0 -$5.00</p>
            </div>
          </form>

          <div className="shop_menu_products">
            <h2>Top Products</h2>
            <div className="shop_menu_card">
              <div className="shop_menu_card_column">
                <img src={products[0].image} alt="" />
                <p> $5.00</p>
              </div>
              <p className="menu_card_text">
                Scottish History: The West Lothian Connection (Ebook){" "}
              </p>
            </div>
          </div>

          <div className="shop_menu_news">
            <h2>Latest News</h2>

            <div className="shop_menu_news_card">
              <img src={news[1].images[0]} alt="" />
              <div className="shop_menu_news_card_column">
                <p className="shop_menu_news_date"> 21 Feb 2021</p>
                <p className="menu_news_card_text">{news[1].title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shop_main">
          <div className="shop_main_top">
            <p>
              Showing all <strong>4</strong> results{" "}
            </p>
            <FiSearch className="shop_main_icon" />
          </div>

          <div className="shop_main_products">
            {shopProducts.map((el, id) => (
              <div
                className="shop_main_card"
                key={id}
                // onClick={() => {
                //   setShopModal(!shopModal);
                //   setCurrentProduct(el);
                // }}
              >
                <div className="shop_img_cont">
                  <div className="shop_hover">
                    {checkCart(el) === true ? (
                      <div onClick={e => remove(e, el)}>
                        <IoBagRemove className="shop_card_icon remove " />
                      </div>
                    ) : (
                      <div onClick={e => addToCart(e, el)}>
                        <FaShoppingBag className="shop_card_icon" />
                      </div>
                    )}

                    <div
                      onClick={() => {
                        setShopModal(!shopModal);
                        setCurrentProduct(el);
                      }}
                    >
                      <FaSearch className="shop_card_icon" />
                    </div>
                  </div>
                  <img src={el.image.url} alt="" />
                </div>
                <p>{el.title}</p>
                <p className="shop_main_price">${el.price.toFixed(2)} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
