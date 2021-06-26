import React,{useEffect} from 'react';
import CustomerNavbar from '../../Navbar/CustomerNavbar';
import Footer from '../Main/Footer';
// import ImageHelper from '../../helpers/ImageHelper';
import { useDispatch, useSelector } from 'react-redux';
import { GetCart } from '../../store/Cart/actions';
import back from '../../assests/backspace2.svg';
import EmptyCart from '../../assests/EmptyCart.JPG';
import {useHistory} from 'react-router-dom';
import SingleDisplay from './SingleDisplay';


const ItemsDisplay = ({Change}) => {

    // const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(GetCart())
    }, [])

    const data = useSelector(state => state.cart.data)

    var total = data === null ? 0 : data.reduce((a,b)=>a + b.product.price*b.units ,0);
    
    return (
        <React.Fragment>
            <CustomerNavbar/>
        <div className='container mt-5'>
        <img src={back} className='pointer' onClick={()=>history.push('/')} alt="back space" />
        
        {data && data.length>0 ?
        <div>
        <div className="row">
        <div className="col offset-lg-1 col-lg-7 col-md-8 col-sm-12 col-12">
            <div className='container d-flex justify-content-between'>
            <p >My Cart ({data && data.length} items)</p>
            <p >Total: ${total+150}</p>
            </div>


            <div className="card container">
                {data && data.map((item)=>
                <div key={item.product._id}>
                    <SingleDisplay item={item}/>
                </div>
                )}
            </div>


        </div>   
        <div className="mt-5 col col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card small container">
                <div className="py-3">
                <p className='mb-0 font-small-bold'>Price Details ({data && data.length} items)</p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Total MRP <span className='float-end'>${total}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Delivery Charges <span className='float-end'>$50</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Other Charges <span className='float-end'>$100</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Total Price <span className='float-end'>${total+150}</span> </p>
                <hr className='mt-2 mb-2'/>
                <button className='btn btn-sm btn-main width-100p'
                onClick={()=>Change('step2')}>Add Shipping Details</button>
                </div>
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
        <Footer/>
        </React.Fragment>
    )
}

export default ItemsDisplay
