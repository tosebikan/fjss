import "./gallery.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import gallery1 from "../../assets/images/gallery1.png";

const gallery = [
  {
    id: 1,
    url: gallery1
  },
  {
    id: 2,
    url: gallery1
  },
  {
    id: 3,
    url: gallery1
  },
  {
    id: 4,
    url: gallery1
  },
  {
    id: 5,
    url: gallery1
  },
  {
    id: 6,
    url: gallery1
  }
];
function Gallery() {
  return (
    <div className="gallery_container">
      <div className="gallery_hero">
        <img src={HeroImage} alt="" />
        <div className="gallery_hero_text">
          <h2>Photos</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="gallery_menu">
        <p className="gallery_active_menu">All</p>
        <p>Photos</p>
        <p>Visual Identity Graphics design</p>
      </div>

      <div className="gallery_images">
        {gallery.map(el => (
          <img src={el.url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
