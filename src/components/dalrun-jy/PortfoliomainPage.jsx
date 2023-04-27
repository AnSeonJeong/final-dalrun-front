import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const portfolioContent = [
  {
    img: "load",
    categorie: "서울",
    title: "여의도 한강공원",
    link: ''
  },
  {
    img: "load",
    categorie: "강원도",
    title: "감자 물방개공원",
    link: ''
  },
  {
    img: "load",
    categorie: "충청남도",
    title: "천안천",
    link: ''
  }
];

const PortfoliomainPage = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    autoplay: false,
    centerMode: true,
    
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {portfolioContent.map((item, i) => (
            <article className="ptf-work ptf-work--style-4" key={i}>
              <div className="ptf-work__media">
                <Link to={`/${item.link}`} className="ptf-work__link"></Link>
                <img
                  src={`assets/img/dalrun-jy/${item.img}.jpg`}
                  alt=""
                  
                />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link to="/">{item.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfoliomainPage;
