import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { TypeAnimation } from "react-type-animation";

import Navigation from "../Navigation/Navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

import './style.css'

function AutoType() {
  return (
    <TypeAnimation
      sequence={["Strong", 1500, "Reliable", 1500, "Trustworthy", 1500]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}

function HeroContent() {
  return(<div
    className="contain hero"
    style={{
      minHeight: "100vh",
    }}
  >
    <Navigation />

    <div className="container-md hero-content d-flex align-items-center">
      <div className="row flex-column flex-md-row">
        <div className="my-3 d-md-none"></div>
        <div className="col-12 col-md-7">
          <h1 className="text-white hero-font my-5">
            Get A <AutoType /> <br /> Roof Over Your Head
          </h1>
          <div className="text">
            <p className="text-light my-5 hero-text">
              Welcome to Roof Master, your premier source for top-quality
              roofing services. We have been serving Miami for over 15 years,
              and we are dedicated to providing our customers with the best
              possible service.
            </p>
          </div>
          <button className="btn fs-5 py-2 col-12 col-md-6 reques-button bg-orange-y">
            Go to Movies
          </button>
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center py-5 bg-inf">
          <FontAwesomeIcon
            icon={faPlay}
            className="fs-3 p-4 rounded-circle play-button"
          />
        </div>
      </div>
    </div>
  </div>)
}

const Hero = () => {
  return (
    <div className="hero-b">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        effect="fade"
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide className="hero-bg hero-bg-1">
        <HeroContent />
        </SwiperSlide>
        <SwiperSlide className="hero-bg hero-bg-2">
        <HeroContent />
        </SwiperSlide>
        <SwiperSlide className="hero-bg hero-bg-3">
        <HeroContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
