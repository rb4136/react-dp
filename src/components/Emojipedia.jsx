import React from "react";
import Slider from "react-slick";
import emojis from "../emojis";

function Emojipedia() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          {emojis[i].emoji}
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className="emojipedia">
      <p>Cycle through the emojis to see them and learn what they mean!</p>

      <Slider {...settings}>

          {emojis.map(function(emoji) {
            return(
            <div>
              <h3>{emoji.name}</h3><br />
              <h3>{emoji.emoji}</h3><br />
              <p>{emoji.description}</p>
            </div>)
          })}

      </Slider>
    </div>
  )
};

export default Emojipedia;
