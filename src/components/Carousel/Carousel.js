import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { API_key, img_300, noPicture } from "../../config/config";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();
// Gallery component for showing the images of actors and actresses 
const Gallery = ({ id, media_type }) => {
  // useState() hook
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${API_key}&language=en-US`
    );
    setCredits(data.cast);
  };
  // useEffect hook
  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      // autoPlay
    />
  );
};

export default Gallery;
