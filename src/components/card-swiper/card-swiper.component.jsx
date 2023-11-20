import React from 'react';
import * as S from "./card-swiper.styles.jsx"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Prev from "../../assets/arrow-left.svg"
import Next from "../../assets/arrow-right.svg"
import { IconButton } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Container } from "@mui/system"

// import required modules
import { Navigation } from 'swiper/modules';

import { graphql, useStaticQuery } from "gatsby"

export default function App() {

  const staticQuery = useStaticQuery(graphql`
  query {
    weed1: file(relativePath: { eq: "weed-1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    weed2: file(relativePath: { eq: "weed-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    weed3: file(relativePath: { eq: "weed-3.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    cookie1: file(relativePath: { eq: "cookie-1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`)


  return (
    <>
    <Container maxWidth="xl">
      <Swiper navigation={{prevEl:".slider-left",nextEl:".slider-right",}} slidesPerView={3} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><S.Image img={staticQuery.weed1} /></SwiperSlide>
        <SwiperSlide><S.Image img={staticQuery.weed2} /></SwiperSlide>
        <SwiperSlide><S.Image img={staticQuery.weed3} /></SwiperSlide>
        <SwiperSlide><S.Image img={staticQuery.cookie1} /></SwiperSlide>
      </Swiper>
      <IconButton className='slider-left'><Prev /></IconButton>
      <IconButton className='slider-right'><Next /></IconButton>

      </Container>
    </>
  );
}