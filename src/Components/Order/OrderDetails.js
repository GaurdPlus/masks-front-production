import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomerNavbar from '../../Navbar/CustomerNavbar'
import Footer from '../Main/Footer'
import back from '../../assests/backspace2.svg';
import Moment from 'react-moment';
import axios from 'axios';
import { token } from '../../store/Cart/actions';
import { API } from '../../Backend';
import SingleDisplay from '../Cart/SingleDisplay';

const OrderDetails = ({match}) => {


    const history = useHistory()
    const id = match.params.id;

    const [order, setOrder] = React.useState(null)

    React.useEffect(() => {
        getOrder()
        return () => {
            console.log('fetched')
        }
    }, [])

    const getOrder= async ()=>{
        const res =  await axios.get(`${API}/order/get-order/${id}`,
        { headers: {"Authorization" : `Bearer ${token()}`} })
        
        if(res.error){
            return console.log(res.error)
         }
         console.log(res.data)
        return setOrder(res.data)
    }


    return (
        <React.Fragment>
        <CustomerNavbar/>

        <div className='mt-5 mb-5 container' style={{minHeight:'35vh'}}>
        <img src={back} className='pointer' onClick={()=>history.push('/order')} alt="back space" />
        <h3 className='apple-font text-center fw-bold'>Order Detail</h3>
        <hr />


        {order && 
        <div className='row'>
            <div className="col offset-lg-3 offset-md-2 offset-sm-1
             col-lg-6 col-md-8 col-sm-10 col-12">
            {/* <div className="card px-3 py-2">
            <p>Order Date: <span className=''><Moment format='DD MMM YYYY'>
    {order.createdAt} 
</Moment></span> </p>
            <p>Order Date: </p>
            <p>Order Date: </p>
            </div>     */}
            <div className="card  container">
                <div className="py-3">
                <p className="mb-0">Order Date: <span className='float-end text-secondary'><Moment format='DD MMM YYYY'>
                    {order.createdAt} 
                </Moment></span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 ">Order# <span className='float-end text-secondary'>{id}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 ">Order Status: <span className='float-end text-secondary'>{order.deliveryStatus}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 ">Total Price <span className='float-end text-secondary'>${order.totalPrice} ({order.allProducts.length} items)</span> </p>
                
                </div>
            </div>


            <div className="card container mt-5 mb-5">
                {order.allProducts.map((item)=>
                <div key={item.product._id}>
                    <SingleDisplay item={item} display={true}/>
                </div>
                )}
            </div>

            <p><b>Shipping Address</b></p>
            <div className='card px-3 py-2'>
            <p>{order.name} 
                <span className='small text-secondary'>({order.company})</span></p>
                <p><u>Address:</u> {order.shippingAddress}, {order.city},
                    {order.state}
                </p>
                <p><u>Pin:</u> {order.pin}</p>
                <p><u>Phone:</u> {order.phone}</p>
                <p><u>Email:</u> {order.email}</p>

            </div>
            </div>
        </div>
    }

</div>
        <Footer/>
        </React.Fragment>
    )
}

export default OrderDetails
