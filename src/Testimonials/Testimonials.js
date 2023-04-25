import React, { useState } from "react";
import ReactPlayer from "react-player";
import prev from "../assets/icons/previous.png";
import next from "../assets/icons/next.png";
import "./Testimonials.css";
import sun from "../assets/images/Sun.png";
import star from "../assets/icons/Star.png";
import trustBanner from "../assets/images/trust banner-2 1.png";

const videos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://youtube.com/shorts/kOQjRET01hs?feature=share",
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://youtube.com/shorts/Pvdkc5MbRXw?feature=share",
  },
  {
    id: 3,
    title: "Video 3",
    url: "https://youtube.com/shorts/ji_WomwrR3M?feature=share",
  },
];

const Testimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const prevSlide = () => {
    const currentIndex = videos.findIndex(
      (video) => video.id === currentVideo.id
    );
    const prevIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentVideo(videos[prevIndex]);
  };

  const nextSlide = () => {
    const currentIndex = videos.findIndex(
      (video) => video.id === currentVideo.id
    );
    const nextIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentVideo(videos[nextIndex]);
  };
  return (
    <div className="Testimonials">
      <img src={sun} alt="sun" />
      <div className="flex-heading">
        <img src={star} className="star" alt="star" />
        <h1 className="heading">User Testimonial</h1>
        <img src={star} className="star" alt="star" />
      </div>
      <div>
        <ReactPlayer url={currentVideo.url} width="300px" height="300px" />
        <div className="btns">
          <img src={prev} alt="prev" onClick={prevSlide} />

          <img src={next} alt="next" onClick={nextSlide} />
        </div>
      </div>
      <img src={trustBanner} className="trust-banner" alt="trust-banner" />
    </div>
  );
};

export default Testimonials;
