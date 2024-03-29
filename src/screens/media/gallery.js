import * as React from "react";
import "./gallery.css";
import HeroImage from "../../assets/images/home_hero.jpg";
// import { images } from "../../helpers/data";
import Slider from "react-slick";
import { apiFunctions } from "../../helpers/api";

function Gallery() {
  const [modal, setModal] = React.useState(false);
  const [initialSlide, setInitialSlide] = React.useState(0);
  const [filteredData, setFilteredData] = React.useState({
    active: "all",
    data: []
  });
  const [placeholder, setplaceholder] = React.useState({
    active: "all",
    data: []
  });

  React.useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = async () => {
    let images = await apiFunctions.getMedia();
    let sortedImages = images.sort((a, b) => b.id - a.id);
    console.log(images);
    setFilteredData({ active: "all", data: sortedImages });
    setplaceholder({ active: "all", data: sortedImages });

    console.log("placeholder", placeholder);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "gallery_slider",
    initialSlide: initialSlide
  };

  const filter = e => {
    if (e === "all") {
      let all = placeholder.data;
      setFilteredData({ active: "all", data: all });
      return;
    }

    if (e === "photos") {
      let photos = placeholder.data.filter(el => el.type !== "graphics");
      setFilteredData({ active: "photos", data: photos });
      return;
    }
    if (e === "fjss") {
      let photos = placeholder.data.filter(el => el.type === "fjss");
      setFilteredData({ active: "fjss", data: photos });
      return;
    }
    if (e === "windrush") {
      let photos = placeholder.data.filter(el => el.type === "windrush");
      setFilteredData({ active: "windrush", data: photos });
      return;
    }
    if (e === "events") {
      let photos = placeholder.data.filter(el => el.type === "events");
      setFilteredData({ active: "events", data: photos });
      return;
    }

    if (e === "graphics") {
      let graphics = placeholder.data.filter(el => el.type === "graphics");
      setFilteredData({ active: "graphics", data: graphics });
      return;
    }

    console.log("placeholder", placeholder);
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
            {filteredData.data.map((el, id) => (
              <div className="media_cont" key={id}>
                <img src={el.image.url} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div className="gallery_menu">
        <p
          className={filteredData.active === "all" ? "gallery_active_menu" : ""}
          onClick={() => filter("all")}
        >
          All
        </p>

        <p
          className={
            filteredData.active === "fjss" ? "gallery_active_menu" : ""
          }
          onClick={() => filter("fjss")}
        >
          FJSS Group Staff
        </p>
        <p
          className={
            filteredData.active === "windrush" ? "gallery_active_menu" : ""
          }
          onClick={() => filter("windrush")}
        >
          Windrush Project Photos
        </p>
        <p
          className={
            filteredData.active === "events" ? "gallery_active_menu" : ""
          }
          onClick={() => filter("events")}
        >
          Events
        </p>
        <p
          className={
            filteredData.active === "photos" ? "gallery_active_menu" : ""
          }
          onClick={() => filter("photos")}
        >
          Photos
        </p>
        <p
          className={
            filteredData.active === "graphics" ? "gallery_active_menu" : ""
          }
          onClick={() => filter("graphics")}
        >
          Visual Identity Graphics design
        </p>
      </div>

      <div className="gallery_images">
        {filteredData.data.map((el, id) => (
          <div
            key={id}
            onClick={() => {
              setModal(!modal);
              setInitialSlide(id);
            }}
            className="gallery_img"
          >
            <img src={el.image.url} alt="" />
          </div>
        ))}

        {filteredData.data.length === 0 && (
          <p className="empty_media_text">There are no available images </p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
