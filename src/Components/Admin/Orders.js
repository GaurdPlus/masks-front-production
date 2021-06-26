import React,{useEffect, useState} from 'react'
import AdminNavbar from '../../Navbar/AdminNavbar';
// import back from '../../assests/backspace2.svg';
// import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios'
import { API } from '../../Backend'
import { token } from '../../store/Cart/actions'
import SubOrder from '../Order/SubOrder';

const Orders = () => {


        const [orders, setOrders] = useState(null)
        const [loading, setLoading] = useState(true)
        const [filter, setFilter] = useState('all')

        useEffect(() => {
          GetRequests()      
            return () => {
                console.log('fetched')
            }
        }, [])


    const GetRequests = async()=>{
        const res =  await axios.get(`${API}/order/get-all-orders-admin`,
         { headers: {"Authorization" : `Bearer ${token()}`} })

        if(res.error){
            return console.log(res.error)
         }
         setLoading(false)
         return setOrders(res.data)
    }


    return (
        <React.Fragment>
            <AdminNavbar/>
            <h3 className='apple-font text-center fw-bold mt-5'>All Orders</h3>
            <hr />
            <div className="container">
                <div className="d-flex justify-content-end">
                <div className="btn-group">
            <button className="btn btn-sm btn-outline-dark
             dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Filter Orders</button>
              <ul className="dropdown-menu">
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('all')}>All</span></li>
                <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('Order received')}>Order received</span></li>
                <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('Order Shipped')}>Order Shipped</span></li>
                 <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('Delivered')}>Delivered</span></li>
                {/* <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer" href="#">Separated link</a></li> */}
            </ul>
            </div>
                </div>
            </div>
            {/* {loading && <p className='mt-5 text-center text-secondary'>Loading...</p>  } */}
            {orders && orders.length>0?
        <div className='mt-5 container'>
        {orders
        .sort((a,b)=>{var c = new Date(a.createdAt);
            var d = new Date(b.createdAt);
           return d-c
        })
        .filter(r => {
            if(filter === 'all'){
                return r
            }else if(filter === 'Order received'){
                return r.deliveryStatus === 'Order received';
            }else if(filter === 'Order Shipped'){
                return r.deliveryStatus === 'Order Shipped';
            }else if(filter === 'Delivered'){
                return r.deliveryStatus === 'Delivered';
            }
        })
        .map((order)=>
        <>
        <SubOrder key={order._id} order={order} admin={true}/>
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
        //  onClick={()=>history.push('/')}
         >Go Back</button>
        </div>
        </div>
        
        } 
        </React.Fragment>
    )
}

export default Orders
