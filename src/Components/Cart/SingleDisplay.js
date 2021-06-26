import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageHelper from '../../helpers/ImageHelper'
import { EditCart } from '../../store/Cart/actions'

const SingleDisplay = ({item,display}) => {


    const [edit, setEdit] = useState(false)
    const [units,setUnits] = useState(item.units)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const EditItem = (e) =>{
        e.preventDefault()
        const product = {
            id:item._id,
            product:item.product,
            units: parseInt(units)
        }
       const r =  cart.data.map(blogPost => {
            return blogPost.product._id === item.product._id ? product: blogPost;
          });
          dispatch(EditCart(r))
          
          setEdit(false)
    }


    const DeleteItem = () =>{
      
       const r =  cart.data.filter(blogPost => blogPost.product._id !== item.product._id);
          
       dispatch(EditCart(r))
    }


    return (
        <div>
                    <div className="row mt-3 mb-3">
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-4'>
                    <ImageHelper name={item.product.name} />
                    </div>
                    <div className='col col-lg-5 col-md-5 col-sm-8 col-8'>
                    <p className='small font-small-bold'>{item.product.name}</p>
                    {edit? 
                    <div className='mb-2 small'>
                        <form onSubmit={(e)=>EditItem(e)}>
                    <label htmlFor="units" className='form-label"'>Units:</label>
                    <div className="d-flex">
                    <input type='number' min={item.product.minOrder} style={{width:'100px'}} defaultValue={item.units}
                     className='mr-4 form-control form-control-sm small'
                     onChange={(e)=>setUnits(e.target.value)} />
                    <button className='btn btn-main btn-sm ml-2'
                    >Update</button>
                    </div></form>
                    </div>
                    :
                    <p className='small'>Units: {item.units}</p>
                    }
                    <p className='small mb-0'>Total Price: {item.product.price*units}</p>
                    </div>
                    </div>
                    <hr className='mt-0 mb-2' />
                    {display ? 
                    
                "":
                    <div className='d-flex justify-content-around
                     small text-secondary'>
                        <span className='pointer' onClick={DeleteItem}>REMOVE</span>
                        <span>|</span>
                        {edit?
                        <span className='pointer' onClick={()=>setEdit(false)}>CANCEL</span>
                        :
                        <span className='pointer' onClick={()=>setEdit(true)}>EDIT</span>
                    }
                    </div>}
                 <hr className='mt-2 mb-2'/>
                </div>
    )
}

export default SingleDisplay
