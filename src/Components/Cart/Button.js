import axios from 'axios';
import React from 'react';
// import '../Button.css';
import PaypalButton from 'react-paypal-express-checkout'; //it works well
import { API } from '../../Backend';
import { token } from '../../store/Cart/actions';
// import {paypalCheckout} from "../actions";
// import { PayPalButton } from "react-paypal-button-v2";


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
    }
    onSuccess(payment) {
        const data = {
            cartDetail: this.props.cartDetail,
            paymentData: payment
        };
        console.log(data)
        
    }
    render() {
        const success = payment => {
            if(payment.paid){
                handleSubmit()
              alert("Payment succeeded!");
            }
            this.onSuccess(payment);
        };
        const error = err => {
           alert("Something went wrong...")
        };
        let env = 'sandbox'; /* change to 'production' for production purposes */
        
        const client = {
            sandbox: 
            'AQODLiwycpX3kNJ7OHTc2L8cyjbQ0SJtSIG7JKwUTTIbQkm-M62S4gXKhaRXeD28mxiQ4CoWBATmM9pt'
            // production: 'PUT_YOUR_LIVE_CLIENT_ID_HERE'
        };

         let handleSubmit = async ()=>{
            const res =  await axios.post(`${API}/order/create-order/`,
            this.props.data,{ headers: {"Authorization" : `Bearer ${token()}`} })
            console.log(res)
            if(res.error){
                this.props.Change('step5')
                return console.log(res.error)
             }
            return this.props.Change('step4')
        }




        return (
            <div className=' width-100p d-flex justify-content-center'>
                <PaypalButton
                env={env}
                client={client} //Express Checkout
                // options={{
                //     clientId: client
                //   }}
                currency='USD'
                total={50}
                onError={error}
                onSuccess={success}
                style={{
                    size: 'large',
                    color: 'blue',
                }}
            />
            {/* <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={success}
        onError={error}
        options={{
            clientId: client,
            currency:'USD'
          }}
      /> */}
            </div>
        )
    }
}
export default Button;