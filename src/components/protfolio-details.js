import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { render } from 'react-dom';
// import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "gatsby-transformer-sharp";
import SwiperCore, { Pagination, Navigation } from "swiper";
// import Modal from "@/components/portfoliomodal";
// /import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"


SwiperCore.use([Pagination, Navigation]);
const ProtfolioDetails = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log("imgdata1",data)
  if (modalIsOpen == true) {
    return (
      // <div>
        
      // </div>
      <div className = "swipo">
        <Swiper pagination={{
          "type": "fraction"
        }} navigation={true} className="mySwiper">
        {data.data.pageContext.data.image.map((img, index) => (
          <SwiperSlide id="swiper">
            <img src={img.localFile.childImageSharp.gatsbyImageData.images.fallback.src}></img>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    )
  }
  else {
    return (
      <section className="commonSection porfolioDetail">
        <Container>


        </Container>
      </section>
    );
  };
}

export default ProtfolioDetails;
