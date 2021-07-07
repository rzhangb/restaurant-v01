import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiCarousel.css";
import { multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  /* console.log(props); */
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const MultiCarousel = () => {
  var settings = {
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 5,
    responsive: [
        {
          breakpoint: 500,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        },
        {
            breakpoint: 1400,
            settings: { slidesToShow: 4, slidesToScroll: 4, infinite: false }
        }
    ]
  }

  return (
    <div style={{ margin: "60px" }} className="carousel">
      <h1 style={{fontSize:"3.5em", color:"#333", margin: "15px auto", textAlign: "center"}} >Gallery of Dishes</h1>
      <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        {...settings}
      >
        {multiData.map((item, index) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item.img}
        alt="item.title"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
          marginBottom: "0px",
          marginTop: "10px"
        }}
      />
      <p style={{fontFamily: "Noto Sans TC", fontSize: "25px", padding: "0px 0" }}>{item.title}</p>
    </div>
  );
};

export default MultiCarousel;
