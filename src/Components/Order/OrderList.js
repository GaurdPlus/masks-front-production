import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CustomerNavbar from '../../Navbar/CustomerNavbar'
import Footer from '../Main/Footer'
import back from '../../assests/backspace2.svg';
import axios from 'axios';
import { token } from '../../store/Cart/actions';
import { API } from '../../Backend';
import SubOrder from './SubOrder';

const OrderList = () => {

    const history = useHistory()
    const [orders, setOrders] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        getOrders()
        setLoading(true)
        return () => {
            console.log('data fetched')
        }
    }, [])

    const getOrders= async ()=>{
        const res =  await axios.get(`${API}/order/get-all-orders/`,
        { headers: {"Authorization" : `Bearer ${token()}`} })
        
        if(res.error){
            return console.log(res.error)
         }
         setLoading(false)
        return setOrders(res.data)
    }



    return (
        <React.Fragment>
        <CustomerNavbar/>

        <div className='mt-5 mb-5 container' style={{minHeight:'35vh'}}>
        <img src={back} className='pointer' onClick={()=>history.push('/')} alt="back space" />
        <h3 className='apple-font text-center fw-bold'>My Orders</h3>
        <hr />

        {orders && orders.length>0?
        <div>
        {orders
        .sort((a,b)=>{var c = new Date(a.createdAt);
            var d = new Date(b.createdAt);
           return d-c
        })
        .map((order)=>
        <>
        <SubOrder key={order._id} order={order}/>
        <hr />
        </>
        )}
        </div>
        :
        loading ? <p className='mt-5 text-center text-secondary'>Loading...</p> :
        <div>
            
        <p className='text-center mt-5 text-secondary'>
            No Orders to show
        </p>
        <div className="d-flex justify-content-center">
        <button className='rounded-0 btn btn-dark px-3'
         onClick={()=>history.push('/')}>Go Back</button>
        </div>
        </div>
        
        } 
        
        </div>


        <Footer/>
        </React.Fragment>
    )
}

export default OrderList
