import * as React from "react";
import "./gallery.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import { images } from "../../helpers/data";
import Slider from "react-slick";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function Gallery() {
  const [modal, setModal] = React.useState(false);
  const [initialSlide, setInitialSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "gallery_slider",
    initialSlide: initialSlide
  };
  return (
    <div className="gallery_container">
      <div className="gallery_hero">
        <img src={HeroImage} alt="" />
        <div className="gallery_hero_text">
          <h2>Photos</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {modal && (
        <div className="media_modal">
          <div className="gallery_close_icon" onClick={() => setModal(!modal)}>
            X
          </div>

          <Slider {...settings}>
            {images.map((el, id) => (
              <div className="media_cont" key={id}>
                <img src={el.url} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div className="gallery_menu">
        <p className="gallery_active_menu">All</p>
        <p>Photos</p>
        <p>Visual Identity Graphics design</p>
      </div>

      <div className="gallery_images">
        {images.map((el, id) => (
          <div
            onClick={() => {
              setModal(!modal);
              setInitialSlide(id);
            }}
            className="gallery_img"
          >
            <img src={el.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
