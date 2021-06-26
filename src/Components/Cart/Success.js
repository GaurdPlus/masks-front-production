import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SuccessIcon from '../../assests/success-icon.png'
import CustomerNavbar from '../../Navbar/CustomerNavbar';
import { Reset } from '../../store/Cart/actions';
import Footer from '../Main/Footer';

const Success = () => {


    const history = useHistory()
   const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(Reset())
    }, [])

    return (
        <React.Fragment>
            <CustomerNavbar/>
            <div style={{marginTop:'10vh'}} className='row'>
            <div className="col offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-12">
            <div className='border p-3'>
                <div className="d-flex justify-content-center mt-5">
                <img src={SuccessIcon} width={'75px'} alt="" />
                </div>
            <br />
            <p className='fs-2 mb-0 text-center text-secondary'>Order Placed Successfully!!</p>
            <p className='small text-secondary text-center fw-bold'>
            Thank you for your transfer
            </p>
            <div className="d-flex justify-content-center mt-3">
               <button className="btn btn-outline-dark
               rounded-0 px-5 mb-5"
               onClick={()=>history.push('/')}>Continue Shopping</button>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </React.Fragment>
    )
}

export default Success
