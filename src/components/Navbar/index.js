import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";


function NavbarUser(props) {
  const [login, setLogin] = useState("");


  useEffect(() => {
    if (localStorage.getItem("userHome")) {
      let lg = JSON.parse(localStorage.getItem("userHome"));
      setLogin(`${lg.hoTen}`);
    } else {
      setLogin("Đăng nhập");
    }
  }, []);
  useEffect(() => {
    if (login === "Đăng nhập")
      document.getElementById("lg").classList.remove("dropdown");
    else
      document.getElementById("lg").classList.add("dropdown");

  }, [login])

  const handleLogOut = () => {
    localStorage.removeItem("userHome");
    setLogin("Đăng nhập");
  }
  return (
    <div >
      <header className="header ">
        <div className="row justify-content-between mr-0">
          <div className="header__logo ml-5 mt-2">
            <Link to="/"><img src="../images/logo.png" alt="anh_LOGO" /></Link>

          </div>
          <div className="header__nav mr-5" id="nav-test">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item  ">
                    <a className="nav-link" href="#">Lịch chiếu</a>
                  </li>
                  <li className="nav-item  ">
                    <a className="nav-link" href="#">Cụm rạp </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">Tin tức </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">Ứng dụng</a>
                  </li>
                  <li className="nav-item login" id="lg">
                    <NavLink to="auth-home">{login === "Đăng nhập" ? "Đăng nhập" : "Xin chào, " + ` ${login}`}</NavLink>
                    {/* <a className="nav-link" href="#"><i className="fa fa-user" /> Đăng nhập</a> */}
                    <div className="dropdown-content" style={{ background: "white" }}>
                      <button className="btn logout" onClick={handleLogOut}>Đăng Xuất</button> <br />
                      <Link className="btn lichSuDatVe p-0" to="/history">Lịch sử đặt vé</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div >
  )
}

export default (NavbarUser);
