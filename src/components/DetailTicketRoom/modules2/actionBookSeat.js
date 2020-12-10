import Axios from "axios";
// import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import { Link, useHistory, NavLink } from "react-router-dom";
import { Redirect } from 'react-router-dom';

const actFetchBookSeat = (info) => {

  // Alert 
  const alertAnimation = () => {
    Swal.fire({
      title: 'Đặt Vé Thành Công',
      text: 'Thông tin vé sẽ được gửi đến email của bạn hoặc ở lịch sử đặt vé!',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "http://localhost:3000/detail-ticketroom";
      }
    })
  }
  let token = "";
  if (localStorage.getItem("userHome")) {
    token = JSON.parse(localStorage.getItem("userHome")).accessToken;
  }
  return dispatch => {
    // dispatch(actBookTicketsReQuest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: info,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(result => {
        { alertAnimation() }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: `${err.response.data}`,
        })
      })
  }
}









export { actFetchBookSeat };

