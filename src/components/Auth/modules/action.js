import Axios from "axios";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED } from "./constant";
import Swal from 'sweetalert2';
const actFetchLogin = (user, history) => {

  return dispatch => {
    //báo hiệu tới hàm actLoginReuest gửi lên 1 request
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user
    })
      .then(result => {

        dispatch(actLoginSuccess(result.data));
        //kiểm tra maLoaiNguoiDung là Quản trị thì mới cho đăng nhập vào trang admin
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          //lưu xuống localStorage để giữ trạng thái đăng nhập
          localStorage.setItem("userHome", JSON.stringify(result.data));
          // Chuyển hướng qua trang Dashboard:<Redirect /> chỉ hiểu khi được gọi trong component
          history.push("/");
        }
      })
      .catch(error => {
        dispatch(actLoginFailed(error));
      })

  }
}
const actLoginRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}
const actLoginSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    data,
  }
}
const actLoginFailed = (err) => {
  return {
    type: AUTH_FAILED,
    err,
  }
}

export { actFetchLogin };