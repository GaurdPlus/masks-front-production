import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../Backend';

const LandingContactUs = () => {


  const notify = (msg) => toast.info(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  

    const [formData,setFormData] = React.useState({
        email:'',
        personName:'',
        companyName:'',
        phone:'',
        address:'',
        companyAge:'',
        buyerType:'',
        disposableFaceMasks:false,
        n95CupMask:false,
        n95CupValveMask:false,
        description:''
    })

    const {email,
    personName,
    companyName,
    phone,
    address,
    companyAge,
    buyerType,
    disposableFaceMasks,
    n95CupMask,
    n95CupValveMask,
    description} = formData;


    const handleChange = name => event => {
        setFormData({ ...formData, [name]: event.target.value });
      };

    const handleChecked = name => event => {
      setFormData({ ...formData, [name]: event.target.checked });
    };  

      const handleSubmit = async e =>{
          e.preventDefault();
          console.log(formData)
          const res = await axios.post(`${API}/requests/post-request`,formData)

          if(res.error){
            console.log(res.error)
          }else{
            setFormData({
              email:'',
              personName:'',
              companyName:'',
              phone:'',
              address:'',
              companyAge:'',
              buyerType:'',
              disposableFaceMasks:false,
              n95CupMask:false,
              n95CupValveMask:false,
              description:''
          })
  
            notify('Thank you for submitting!!')
          }
          
      }
      

    return (
        
<section className='contact-us-form-section container mt-5 py-5'>


<h3 className='text-center mt-3 font-900 apple-font'>Bulk Order Form</h3>

<form className='mt-5 contact-us' onSubmit={handleSubmit}>

  <div className="row">


    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <label htmlFor="email" className="form-label">Email address <span className='text-danger'>*</span></label>
    <input type="email"  onChange={handleChange("email")} 
    value={email}  className="form-control" id="email" aria-describedby="emailHelp"
     required={true}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <label htmlFor="person-name" className="form-label">Person Name <span className='text-danger'>*</span></label>
    <input type="text" className="form-control" onChange={handleChange("personName")} value={personName} required={true}/>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <label htmlFor="person-name" className="form-label">Company Name <span className='text-danger'>*</span></label>
    <input type="text" className="form-control"  onChange={handleChange("companyName")} value={companyName} required={true}/>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <label htmlFor="person-name" className="form-label">Phone Number <span className='text-danger'>*</span></label>
    <input type="text" className="form-control"  onChange={handleChange("phone")} value={phone}  required={true}/>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <label htmlFor="person-name" className="form-label">Company Address Line <span className='text-danger'>*</span></label>
    <input type="text" className="form-control"   onChange={handleChange("address")} value={address} required={true}/>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <label htmlFor="person-name" className="form-label">How old is your company? <span className='text-danger'>*</span></label>
    <input type="text" className="form-control"  onChange={handleChange("companyAge")} value={companyAge} required={true}/>
    </div>
    
    <label htmlFor="person-name" className="form-label">Type of buyer? <span className='text-danger'>*</span></label>

    
    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <div className="form-check">
    <input className="form-check-input" type="radio" name="buyerType"
      onChange={handleChange("buyerType")} required={true} value={'Distributor'}
      checked={buyerType === 'Distributor'}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Distributor 
  </label>
  <div className="form-text">(eg: Vendor, Supplier, or Reseller)</div> 
    </div>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <div className="form-check">
    <input label="Male" className="form-check-input" type="radio"
     name="buyerType" required={true}  onChange={handleChange("buyerType")}
      value={'Direct Buyer'}  checked={buyerType === 'Direct Buyer'}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Direct Buyer
  </label>
  <div className="form-text">(eg: Hospitals, State or Government Agency, Industrial Company, or Small Businesses)</div> 
    </div>
    </div>

    <div className="col col-md-4 col-sm-6 col-12 mb-3">
    <div className="form-check">
    <input className="form-check-input" type="radio" name="buyerType"
     required={true}  onChange={handleChange("buyerType")} value={'Other'}
     checked={buyerType === 'Other'}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Other
  </label>
    </div>
    </div>



  <label className="form-check-label" htmlFor="exampleCheck1">What product are you interested in? <span className='text-danger'>*</span></label>
  
  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"  onChange={handleChecked("disposableFaceMasks")} checked={disposableFaceMasks} value={disposableFaceMasks}/>
    <label className="form-check-label" htmlFor="exampleCheck1">3ply Face mask</label>
  </div>
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleChecked("n95CupMask")} checked={n95CupMask} value={n95CupMask}/>
    <label className="form-check-label" htmlFor="exampleCheck1">N-95 Cup Face Mask</label>
  </div>
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleChecked("n95CupValveMask")} checked={n95CupValveMask} value={n95CupValveMask}/>
    <label className="form-check-label" htmlFor="exampleCheck1">N-95 Cup Face mask with Respirator Valve</label>
  </div>
  </div>

  <div className="col col-12 mb-3">
   <div className="">
   <label htmlFor="floatingTextarea2">How many boxes of each product are you interested in? <span className='text-danger'>*</span></label>
  <textarea className="form-control" id="floatingTextarea2" style={{height:'5em'}} required={true}  onChange={handleChange("description")} value={description}></textarea>
</div>

  </div>

  </div>

<div className="d-flex justify-content-center">
<button type="submit" className="btn btn-main px-10">Submit</button>
</div>
</form>
<ToastContainer/>
</section>

    )
}

export default LandingContactUs
