import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import ImageHelper from '../../helpers/ImageHelper';
import {GetCart} from '../../store/Cart/actions';
import axios from 'axios';
import {API} from '../../Backend';
import AddToCartButton from './AddToCartButton';


const MiniList = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState(null)

    useEffect(() => {
        dispatch(GetCart())
    }, [])

    useEffect(() => {
        GetProducts()
    },[])


    const GetProducts =  async ()=> {
        const res = await axios.get(`${API}/product/all-products`) 
        if(res.error){
           return console.log(res.error)
        }
        return setProducts(res.data)
    }

    
    return (
        <div className='container mt-5 mb-5'> 
            {/* {data.map(d=> <img src={d.src} width={'100px'} alt="" /> )} */}
            <div className="row">
            {products && products.map((item,index)=>
                <div key={item._id} className=" col col-lg-3 offset-lg-1 col-md-4 col-sm-6 col-12 mt-3">
                    <div className="card shadow-lg">
                        <div className="container">
                    <div>
                    <ImageHelper name={item.name} />
                    </div>
                    <p className='mb-0 font-small-bold'>{item.name}</p>
                    <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Price: <span className='float-end'>${item.price}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Min Order: <span className='float-end'>{item.minOrder} units</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Masks/Unit: <span className='float-end'>{item.maskPerUnit} masks</span> </p>
                <hr className='mt-2 mb-2'/>

                    {/* ======== */}
                    {/* <div className="py-3">
                <p className='mb-0 font-small-bold'>Price Details ({data.length} items)</p>
                
                <button className='btn btn-sm btn-main width-100p'>Pay Now</button>
                </div> */}


                    {/* ======= */}
                    
                    <div className="d-flex justify-content-center mb-3">
                       
                    <AddToCartButton product={item._id} units={item.minOrder}/>
                        
                    </div>
                        </div>
                    </div>
                </div>
                 )}
            </div>
        </div>
    )
}

export default MiniList
