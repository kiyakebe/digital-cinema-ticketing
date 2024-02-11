import { TypeAnimation } from "react-type-animation";

import Navigation from "../Navigation/Navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import banner from '../../assets/hero/banner.jpg'

import "swiper/css/bundle";
import "./style.css";
import { useNavigate } from "react-router-dom";

function AutoType() {
  return (
    <TypeAnimation
      sequence={["An Immersive", 1500, "A Thrilling", 1500, "An Exciting", 1500]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}

function HeroContent() {

  const navigate = useNavigate()

  return (
    <div
      className="contain hero"
      style={{
        minHeight: "100vh",
      }}
    >
      <Navigation />

      <div className="container-md hero-content d-flex align-items-center">
        <div className="row flex-column flex-md-row">
          <div className="my-3 d-md-none"></div>
          <div className="col-12 col-md-6 d-flex justify-content-center flex-column ">
            <h2 className="text-white hero-font my-5 ">
              Get <AutoType /> <br /> Movie with Your Beloved One
            </h2>
            <div className="text">
              <p className="text-light m2-5 hero-text">
                An immersive cinematic experience, bringing stories to life on
                the big screen with captivating visuals, powerful sound, and
                unforgettable moments of joy, suspense, and wonder.
              </p>
            </div>
            <button className="btn fs-5 mt-2 col-12 col-md-6 reques-button bg-orange-y" onClick={() => navigate('/movies')}>
              Go to Movies
              
            </button>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center py-5 bg-inf">
            <img src={banner} width={"90%"}/>
          </div>
        </div>
      </div>
    </div>
  );
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
