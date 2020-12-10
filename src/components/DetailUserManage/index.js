import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
// import Loading from "../../components/Loading/loading";

function DetailUserManage(props) {
  const [userDetail, setUserDetail] = useState(null)
  useEffect(() => {
    const id = props.match.params.id;
    if (props.listUser) {
      let user = props.listUser.find((item) => {
        return item.taiKhoan === id;
      })
      setUserDetail(user);
    }
  }, [])
  return (
    <div className="w-50 mx-auto  pl-5 mt-5" style={{ border: "1px solid gray", boxShadow: "2px 2px 10px 2px lightgray" }}>
      <h2 className="display-4 my-4 text-center">Thông tin chi tiết</h2>
      <p>Tài Khoản: <span className="font-weight-bold">{userDetail ? userDetail.taiKhoan : ""}</span></p>
      <p>Email: <span className="font-weight-bold">{userDetail ? userDetail.email : ""}</span></p>
      <p>Số điện thoại: <span className="font-weight-bold">{userDetail ? userDetail.soDt : ""}</span></p>
      <p>Loại người dùng: <span className="font-weight-bold">{userDetail ? userDetail.maLoaiNguoiDung : ""}</span></p>
      <p>Họ tên: <span className="font-weight-bold">{userDetail ? userDetail.hoTen : ""}</span></p>
      <NavLink activeClassName="active" className="nav-link" to="/admin"><Button type="primary" danger className="my-5">Trở về trang trước</Button></NavLink>
    </div>
  )

}
const mapStateToProps = state => {
  return {
    listUser: state.AdminReducer.listUser,
  }
}
export default connect(mapStateToProps, null)(DetailUserManage);
