import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { AddShipping, GetCart } from '../../store/Cart/actions';
import CustomerNavbar from '../../Navbar/CustomerNavbar';
import Footer from '../Main/Footer';
import back from '../../assests/backspace2.svg';
import EmptyCart from '../../assests/EmptyCart.JPG';


const ShippingDetails = ({Change}) => {

    // const [cart.data, setcart.Data] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCart())
    }, [])

    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth.user)

    var total = cart.data === null ? 0 : cart.data.reduce((a,b)=>a + b.product.price*b.units ,0);
    
    const [formData,setFormData] = React.useState({
        email:auth.mail,
        name:'',
        company:'',
        phone:'',
        shippingAddress:'',
        city:'',
        state:'',
        pin:'',
    })

    const [filled,setFilled] = React.useState(false)


    const {
    name,
    company,
    phone,
    shippingAddress,
    city,
    state,
    pin
    } = formData;

    useEffect(() => {
        if(cart.shippingDetails){
           setFormData({
            email:auth.mail,
            name:cart.shippingDetails.name,
            company:cart.shippingDetails.company,
            phone:cart.shippingDetails.phone,
            shippingAddress:cart.shippingDetails.shippingAddress,
            city:cart.shippingDetails.city,
            state:cart.shippingDetails.state,
            pin:cart.shippingDetails.pin,
           }) 
           setFilled(true)
        }
    }, [cart])




    const handleChange = name => event => {
        setFormData({ ...formData, [name]: event.target.value });
      };


      const handleSubmit= async e =>{
        e.preventDefault()
        dispatch(AddShipping(formData))
        setFilled(true)
        Change('step3')
      }


    return (
        <div>
                <CustomerNavbar/>
        <div className='container mt-5'>
        <img src={back} className='pointer' onClick={()=>Change('step1')} alt="back space" />
        
        {cart.data && cart.data.length>0 ?
        <div>
        <div className="row">
        <div className="col offset-lg-1 col-lg-7 col-md-8 col-sm-12 col-12">
            <div className='container d-flex justify-content-between'>
            <p >My Cart ({cart.data && cart.data.length} items)</p>
            <p >Total: ${total+150}</p>
            </div>

{/* ===========================shipping details form start================== */}

<h4 className='font-900 apple-font text-center'>Shipping details</h4>
<hr />

<form className='mt-5 contact-us' onSubmit={handleSubmit}>

<div className="row">


   <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Your Name <span className='text-danger'>*</span></label>
  <input type="text" className="form-control" onChange={handleChange("name")} value={name} required={true}/>
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Company Name <span className='text-danger'>*</span></label>
  <input type="text" className="form-control"  onChange={handleChange("company")} value={company} required={true}/>
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Phone Number <span className='text-danger'>*</span></label>
  <input type="text" className="form-control"  onChange={handleChange("phone")} value={phone}  required={true}/>
  </div>

  <div className="col col-md-12 col-sm-12 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Shipping Address <span className='text-danger'>*</span></label>
  <textarea type="text" className="form-control"   onChange={handleChange("shippingAddress")} value={shippingAddress} required={true}></textarea>
  </div>

  <div className="col col-md-6 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">city <span className='text-danger'>*</span></label>
  <input type="text" className="form-control"   onChange={handleChange("city")} value={city} required={true}/>
  </div>

  <div className="col col-md-6 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">state / province <span className='text-danger'>*</span></label>
  <input type="text" className="form-control"   onChange={handleChange("state")} value={state} required={true}/>
  </div>

  <div className="col col-md-6 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Pin <span className='text-danger'>*</span></label>
  <input type="text" className="form-control" onChange={handleChange("pin")} value={pin} required={true}/>
  </div>

</div>


<div className="d-flex justify-content-center">
<button type="submit" className="btn btn-main px-10">Submit</button>
</div>


</form>


{/* ===========================shipping details form end================== */}


        </div>   
        <div className="mt-5 col col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card small container">
                <div className="py-3">
                <p className='mb-0 font-small-bold'>Price Details ({cart.data && cart.data.length} items)</p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Total MRP <span className='float-end'>${total}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Delivery Charges <span className='float-end'>$50</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Other Charges <span className='float-end'>$100</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Total Price <span className='float-end'>${total+150}</span> </p>
                <hr className='mt-2 mb-2'/>
               {filled?
               <button className='btn btn-sm btn-main width-100p'
               onClick={()=>Change('step3')}>Preview Order</button>:
               <button className='btn btn-sm btn-main width-100p'
               disabled={true}>Preview Order</button>
            }
                
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
        </div>
    )
}

export default ShippingDetails
