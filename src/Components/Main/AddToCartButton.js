import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AddToCart} from '../../store/Cart/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToCartButton = ({product,units}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)

    const [found, setFound] = useState(false)

    useEffect(() => {
        Search()
    }, [cart])

    const Search =()=>{
        let el;
        if(cart.data){
             el = cart.data.find(item=> item.product._id === product)
        }
        el  === undefined ? setFound(false) : setFound(true);
    }
     
    const AddItem=()=>{
        dispatch(AddToCart({product:product,units:units}))
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }

    const notify = (msg) => toast.info(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });


    return (
        <>
        {!found && auth.isLoggedIn &&
            <button className='slider-btn2 width-100p' onClick={()=>AddItem()}>Add To Cart</button>}
        
        {!found && !auth.isLoggedIn &&
            <button className='slider-btn2 width-100p' onClick={()=>notify('Login to Add To Cart!')}>Add To Cart</button>}

           { found && <button className='slider-btn2-added width-100p' disabled={true}>Added To Cart</button>}
        <ToastContainer/>
         </>    
    )
}

export default AddToCartButton
