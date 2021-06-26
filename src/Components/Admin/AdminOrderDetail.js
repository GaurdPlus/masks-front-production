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

const AdminOrderDetail = ({match}) => {


    const history = useHistory()
    const id = match.params.id;

    const [order, setOrder] = React.useState(null)
    const [deliveryStatus, setDeliveryStatus] = React.useState()
    const [editState, setEditState] = React.useState(false)

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
         setEditState(false)
         setDeliveryStatus(res.data.deliveryStatus)
        return setOrder(res.data)
    }


    const editOrder= async ()=>{
        const res =  await axios.put(`${API}/order/edit-order/${id}`,
       {deliveryStatus}, { headers: {"Authorization" : `Bearer ${token()}`} })
        
        if(res.error){
            return console.log(res.error)
         }
        //  setEditState(false)
        //  setDeliveryStatus(res.data.deliveryStatus)
        return window.location.reload()
        // console.log(res.data)
    }







    return (
        <React.Fragment>
        <CustomerNavbar/>

        <div className='mt-5 mb-5 container' style={{minHeight:'35vh'}}>
        <img src={back} className='pointer' onClick={()=>history.push('/sdklfhsdfe3klj432hrkljhsdf/orders')} alt="back space" />
        <h3 className='apple-font text-center fw-bold'>Order Detail</h3>
        <hr />


        {order ?
        <>
        <div className='row'>
            <div className="col offset-lg-3 offset-md-2 offset-sm-1
             col-lg-6 col-md-8 col-sm-10 col-12">
            
            <div className="card  container">
                <div className="py-3">
                <p className="mb-0">Order Date: <span className='float-end text-secondary'><Moment format='DD MMM YYYY'>
                    {order.createdAt} 
                </Moment></span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 ">Order# <span className='float-end text-secondary'>{id}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 ">Order Status: <span className='float-end text-secondary'>{order.deliveryStatus}
                {order.deliveryStatus === 'Order received' &&
                <span class="badge bg-warning text-dark">new</span>}</span> </p>
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

        {/* ===================edit deliveryStatus=================== */}

       {editState && <div className='mt-5 container'>
        <p><b>Edit Delivery Status</b></p>
        <div className="row py-2">
        {/* <input type="text" /> */}
         <div className="col col-md-6 col-sm-8 col-12">
         <div className='d-flex'>
         <select name="role"
                      className="form-control form-control-sm"
                      value={deliveryStatus}
                      onChange={(e)=>setDeliveryStatus(e.target.value)}>
                      <option disabled>Delivery Status:</option>                                
                      {['Order received','Order Shipped',"Delivered"].map((d,index)=>
                      <option value={d} key={index}>{d}</option>                                
                      )}                               
                      </select> 
                      <button className='btn btn-sm btn-outline-dark'
                      onClick={editOrder}>Update</button>
         </div>
         </div>     
        </div>
        </div> }
        <div className='mt-5 d-flex justify-content-center'>
            {!editState ?
            <button className='btn btn-sm btn-main px-5'
             onClick={()=>setEditState(!editState)}>
            Edit Delivery Status
        </button>:
        <button className='btn btn-sm btn-main px-5'
        onClick={()=>setEditState(!editState)}>
        Cancel Editing
        </button>
        }
            
        </div>

        {/* ===================edit deliveryStatus end=================== */}

            </div>
        </div>
        
        </>
   :<p className='mt-5 text-center text-secondary'>Loading...</p> }

</div>
        <Footer/>
        </React.Fragment>
    )
}

export default AdminOrderDetail
