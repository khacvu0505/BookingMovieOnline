import React, { Component } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import Swal from 'sweetalert2';

export default class PayPal extends Component {
  render() {
    let { dola } = this.props;
    dola = Math.round(dola / 23000 * 100) / 100;
    console.log(dola);
    return (
      <PayPalButton
        amount={dola}
        onSuccess={(details, data) => {
          Swal.fire(
            'Thanh toán thành công',
            '',
            'success'
          )
          // alert("Thanh toán thành công " + details.payer.name.given_name);
          return fetch("/auth-home", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "ATYQd4CEL4SonfbW4_AzQGfWW-iA3LDempkI3OcXqETgQr3fcvyBv6IACoC3_8vqmII2_vDLte1wfqrm",
          currency: "USD"
        }}
      />
    );
  }
}