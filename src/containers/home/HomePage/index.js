import React from 'react'
import CarouselHomePage from "../../../components/Carousel";
import News from "../../../components/News"
import FooterHomePage from "../../../components/Footer";
import { Link } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';



export default function HomePage() {
  const handleBackToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <div className="home">
      <CarouselHomePage />
      <News />
      <FooterHomePage />
      <span onClick={handleBackToTop} id="backtotop" className="backtotop"><i class="fa fa-angle-up"></i></span>
    </div>
  )
}
