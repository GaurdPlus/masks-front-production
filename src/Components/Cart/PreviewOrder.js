import React, { useEffect } from 'react'
import { GetCart, Reset, token } from '../../store/Cart/actions';
import CustomerNavbar from '../../Navbar/CustomerNavbar';
import Footer from '../Main/Footer';
import back from '../../assests/backspace2.svg';
import EmptyCart from '../../assests/EmptyCart.JPG';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API } from '../../Backend';
import Button from './Button';



const PreviewOrder = ({Change}) => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCart())
    }, [])

    const cart = useSelector(state => state.cart)
    // const auth = useSelector(state => state.auth.user)

    var total = cart.data === null ? 0 : cart.data.reduce((a,b)=>a + b.product.price*b.units ,0);


   var data = cart.data !== null && {...cart.shippingDetails,allProducts:cart.data,
        totalPrice:total
    }


    setTimeout(() => {
        if(!cart.shippingDetails){
            Change('step2')
        }
    }, 2500);


    // const handleSubmit= async ()=>{
        
    //     const data = {...cart.shippingDetails,allProducts:cart.data,
    //         totalPrice:total
    //     }
    //     const res =  await axios.post(`${API}/order/create-order/`,
    //     data,{ headers: {"Authorization" : `Bearer ${token()}`} })
    //     console.log(res)
    //     if(res.error){
    //         Change('step5')
    //         return console.log(res.error)
    //      }
    //     dispatch(Reset())
    //     return Change('step4')
    // }



    return (
        <div>
        <CustomerNavbar/>
        <div className='container mt-5'>
        <img src={back} className='pointer' onClick={()=>Change('step2')} alt="back space" />
        
        {cart.data && cart.data.length>0 ?
        
        <div className="row">
        <div className="col offset-lg-1 col-lg-7 col-md-8 col-sm-12 col-12">
            <div className='container d-flex justify-content-between'>
            <p >My Cart ({cart.data && cart.data.length} items)</p>
            <p >Total: ${total+150}</p>
            </div>

            <h4 className='font-900 apple-font text-center'>Preview Shipping details</h4>
<hr />
            <div className='card p-3 mb-5 font-600'>
                <p><u>Shipping Details:</u></p>
                {/* <p>{JSON.stringify(cart.shippingDetails)}</p> */}
                {/* {"name":"nikhil","company":"lkjh ","phone":"lkjh ",
                "shippingAddress":"lkjh ","city":"klj ","state":"lkjh ","pin":"klj "} */}
                <p>{cart.shippingDetails.name} 
                <span className='small text-secondary'>({cart.shippingDetails.company})</span></p>
                <p><u>Address:</u> {cart.shippingDetails.shippingAddress}, {cart.shippingDetails.city},
                    {cart.shippingDetails.state}
                </p>
                <p><u>Pin:</u> {cart.shippingDetails.pin}</p>
                <p><u>Phone:</u> {cart.shippingDetails.phone}</p>
                <p><u>Email:</u> {cart.shippingDetails.email}</p>
            </div>



            </div>

            <div className="mt-5 col col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card small container">
                <div className="py-3">
                <p className='mb-0 font-small-bold'>Price Details ({cart.data && cart.data.length} items)</p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Total MRP <span className='float-end'>${total}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Delivery Charges <span className='float-end'>$50</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Other Charges <span className='float-end'>$100</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Total Price <span className='float-end'>${total+150}</span> </p>
                <hr className='mt-2 mb-2'/>
                {/* <button className='btn btn-sm btn-main width-100p'
                onClick={()=>handleSubmit()}>Pay now</button> */}
                <Button data={data} Change={Change}/>
                </div>
            </div>
        </div>
            </div>


            :
        <div className="d-flex justify-content-center mt-5 mb-5">
            <img src={EmptyCart} alt="" />
        </div>
        }  
        </div>
        <Footer  />
        </div>
    )
}

export default PreviewOrder
