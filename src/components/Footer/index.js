import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FooterHomePage(props) {

  const [slick, setSlick] = useState({
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    next: false,
  })
  return (
    <div className="pt-5">
      <footer className="footer">
        <div className="footer__introduce ">
          <div className="container">
            <div className="row">
              <div className="intro__info col-lg-6 text-center text-lg-left">
                <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                <p>
                  Không chỉ đặt vé, bạn có thể bình luận phim, chấm điểm rạp và
                  đổi quà hấp dẫn
                </p>
                <button className="bt mb-2">App miễn phí - Tải về ngay!</button>
                <br />
                <span>
                  {" "}
                  Fox có 2 phiên bản <a href="#">iOS</a> và{" "}
                  <a href="#">Android</a>
                </span>
              </div>

              <div className="intro__img col-lg-6 mt-5 mt-lg-0">
                <img src="./images/mobile.png" alt className="img__mobile" />

                <div className="img__app">
                  <Slider {...slick}>
                    <img src="./images/slide1.jpg" alt className="img-fluid" />
                    <img src="./images/slide2.jpg" alt className="img-fluid" />
                    <img src="./images/slide3.jpg" alt className="img-fluid" />
                    <img src="./images/slide4.jpg" alt className="img-fluid" />
                    <img src="./images/slide5.jpg" alt className="img-fluid" />
                    <img src="./images/slide6.jpg" alt className="img-fluid" />
                  </Slider>
                </div>

              </div>


            </div>
          </div>
        </div>
        <div className="footer__info">
          <div className="container">
            <div className="row info__top">
              <div className="col-md-4">
                <h4>FOX MOVIE</h4>
                <p>
                  {" "}
                  <a href="#">FAQ</a>{" "}
                  <span>
                    <a href="#">Thỏa thuận sử dụng</a>
                  </span>{" "}
                </p>
                <p>
                  <a href="#">Brand Guidelines</a>{" "}
                  <span>
                    {" "}
                    <a href="#">Chính sách bảo mật</a>{" "}
                  </span>
                </p>
              </div>
              <div className="col-md-4">
                <h4>ĐỐI TÁC</h4>
                <div className="row pb-2">
                  <div className="col">
                    <a href="https://www.cgv.vn" title="cgv" target="_blank">
                      <img
                        src="./images/cgv.png"
                        alt="cgv"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col ">
                    <a
                      href="https://www.bhdstar.vn"
                      title="bdh"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src="./images/bhd.png"
                        alt="bhd"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col ">
                    <a
                      href="https://www.galaxycine.vn"
                      title="galaxy"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src="./images/galaxycine.png"
                        alt="galaxy"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="http://cinestar.com.vn"
                      title="cinestar"
                      target="_blank"
                    >
                      <img
                        src="./images/cinestar.png"
                        alt="cinestar"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="col ">
                    <a
                      href="https://www.megagscinemas.vn"
                      title="megags"
                      target="_blank"
                    >
                      <img
                        src="./images/megags.png"
                        alt="megags"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col">
                    <a
                      href="https://www.betacineplex.vn/home.htm"
                      title="beta"
                      target="_blank"
                    >
                      <img
                        src="./images/bt.jpg"
                        alt="bt"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.betacineplex.vn/home.htm"
                    title="beta"
                    target="_blank"
                  ></a>
                  <div className="col">
                    <a href="http://ddcinema.vn" title="ddc" target="_blank">
                      <img
                        src="./images/dongdacinema.png"
                        alt="ddc"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://touchcinema.com"
                      title="touch"
                      target="_blank"
                    >
                      <img
                        src="./images/TOUCH.png"
                        alt="touch"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://cinemaxvn.com"
                      title="cinemax"
                      target="_blank"
                    >
                      <img
                        src="./images/cnx.jpg"
                        alt="cinemax"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://starlight.vn"
                      title="starlight"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src="./images/STARLIGHT.png"
                        alt="starlight"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col">
                    <a
                      href="https://www.dcine.vn"
                      title="dcine"
                      target="_blank"
                    >
                      <img
                        src="./images/dcine.png"
                        alt="dcine"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="http://lottecinemavn.com/LCHS/index.aspx"
                      title="lotte"
                      target="_blank"
                    >
                      <img
                        src="./images/lotte.png"
                        alt="lotte"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.payoo.vn"
                      title="payoo"
                      target="_blank"
                    >
                      <img
                        src="./images/payoo.jpg"
                        alt="payoo"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="https://zalopay.vn" title="zalo" target="_blank">
                      {" "}
                      <img
                        src="./images/zalopay_icon.png"
                        alt="zalo"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.agribank.com.vn"
                      title="agribank"
                      target="_blank"
                    >
                      <img
                        src="./images/AGRIBANK.png"
                        alt="Agribank"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <a
                      href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                      title="vietcombank"
                      target="_blank"
                    >
                      <img
                        src="./images/VCB.png"
                        alt="Vietcombank"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.vietinbank.vn/web/home/vn/index.html"
                      title="viettinbank"
                      target="_blank"
                    >
                      <img
                        src="./images/VIETTINBANK.png"
                        alt="Viettinbank"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.indovinabank.com.vn"
                      title="IVB"
                      target="_blank"
                    >
                      <img
                        src="./images/IVB.png"
                        alt="IVB"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://webv3.123go.vn"
                      title="123go"
                      target="_blank"
                    >
                      <img
                        src="./images/123go.png"
                        alt="123go"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="https://laban.vn" title="laban" target="_blank">
                      <img
                        src="./images/laban.png"
                        alt="laban"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h4 className="pt-3 pt-md-0">SOCIAL</h4>
                <a href="#" title="facebook">
                  <i className="fab fa-facebook pl-0" />
                </a>
                <a href="#" title="instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" title="twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" title="pinterest">
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
            <div className="row info__bottom">
              <div className="col-md-8">
                <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                <p>
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email: <a href="#">support@tix.vn</a>
                </p>
              </div>
              <div className="col-md-4 text-center mt-5">
                <a
                  href="http://online.gov.vn/Home/WebDetails/62782"
                  target="_blank"
                >
                  <img
                    src="./images/bocong thuong.png"
                    alt="bocongthuong"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
