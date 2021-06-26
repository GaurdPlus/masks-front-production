import React from 'react'
import ImageHelper from '../../helpers/ImageHelper';
// import axios from 'axios';
// import { token } from '../../store/Cart/actions';
// import { API } from '../../Backend';
import right from '../../assests/chevron_right.svg'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const SubOrder = ({order,admin}) => {

   

    return (
            <div className='container'>
               <div>
               <div className='d-block d-sm-none '>
                   <Link to={`/order/${order._id}`} style={{textDecoration:'none', color:'inherit'}}>
               <div className="row">
                   <div className="col col-3">
                       <ImageHelper name={order.allProducts[0].product.name} />
                   </div>
                   <div className="col col-8">
                       <p>{order.allProducts[0].product.name} </p>
                       <p className='small text-secondary mb-1'>{order.deliveryStatus}
                       {admin && order.deliveryStatus === 'Order received' &&
                <span class="badge bg-warning text-dark">new</span>}</p>
                       <p className='font-xs text-secondary mb-1'>
                           Order Placed on : 
                        <Moment format='DD MMM YYYY'>
                         {order.createdAt} 
                        </Moment>
                           </p>

                   </div>
                   <div className='col col-1'>
                        <img src={right} alt="" width={'30px'}/>
                   </div>
               </div>
               </Link>
          </div>

       <div className='d-none d-sm-block'>
           
       <Link to={admin ? `/sdklfhsdfe3klj432hrkljhsdf/orders/${order._id}` 
       : `/order/${order._id}`} style={{textDecoration:'none', color:'inherit'}}>
        <div className="row">
            <div className="col offset-lg-2 offset-md-2 col-sm-12">
            <div className="row">
            <div className="col col-lg-1 col-md-2 col-sm-3 col-1">
                <ImageHelper name={order.allProducts[0].product.name} />
            </div>
            <div className="col col-lg-5 col-md-4 col-sm-8 col-10">
                <p>{order.allProducts[0].product.name} </p>
                <p className='small text-secondary mb-1'>{order.deliveryStatus}
                {admin && order.deliveryStatus === 'Order received' &&
                <span class="badge bg-warning text-dark">new</span>}
                </p>
                <p className='font-xs text-secondary mb-1'>
                    Order Placed on: <Moment format='DD MMM YYYY'>
                    {order.createdAt} 
                </Moment>
                    </p>
            </div>
            <div className='col col-1'>
                <img src={right} alt="" width={'30px'}/>
            </div>
        </div>
            </div>
        </div>
        </Link>
       </div>
       
       
       </div>
                
                


            </div>
    )
}

export default SubOrder
