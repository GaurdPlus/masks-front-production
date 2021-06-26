import React,{useEffect,useState} from 'react';
import AdminNavbar from '../../Navbar/AdminNavbar';
import back from '../../assests/backspace2.svg';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios'
import { API } from '../../Backend'
import { token } from '../../store/Cart/actions'


const ProductDetail = ({match}) => {

    const history = useHistory()

    const id = match.params.id

    const [product, setProduct] = useState({
        name:null,
        minOrder:'',
        maskPerUnit:'',
        price:'',
        stockStatus:true,
    })

    const {name,minOrder,maskPerUnit,price,stockStatus} = product;


    useEffect(() => {
        GetRequests()
    }, [])



    // /get-product/:id
    const GetRequests = async()=>{
        const res =  await axios.get(`${API}/product/get-product/${id}`,
         { headers: {"Authorization" : `Bearer ${token()}`} })

        if(res.error){
            return console.log(res.error)
         }
         return setProduct({
            name:res.data.name,
            minOrder:res.data.minOrder,
            maskPerUnit:res.data.maskPerUnit,
            price:res.data.price,
            stockStatus:res.data.stockStatus,
         })
    }


    const handleSubmit=async e=>{
        e.preventDefault()
        // console.log(product)
        const res =  await axios.put(`${API}/product/update-product/${id}`,
         product,{ headers: {"Authorization" : `Bearer ${token()}`} })
        console.log(res)
        if(res.error){
            return console.log(res.error)
         }
         else if(res.data.message === 'Product updated'){
             return history.push('/sdklfhsdfe3klj432hrkljhsdf/products')}
    }

    const handleChange = name => event => {
        setProduct({ ...product, [name]: event.target.value });
      };




    return (
        <div>
            <AdminNavbar/>
            <div className="container mt-5 mb-5 ">
            <img src={back} className='pointer' onClick={()=>history.push('/sdklfhsdfe3klj432hrkljhsdf/products')} alt="back space" />
            <h3 className='font-900 apple-font text-center'>
               {product.name? product.name:"Product Detail"}
                </h3>
            
                <div className="row">
        <div className="col offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-sm-12 col-12">
            

{/* ===========================Product details form start================== */}

<hr />

<form className='mt-5 contact-us' onSubmit={handleSubmit}>

<div className="row">


   {/* <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Product Name <span className='text-danger'>*</span></label>
  <input type="text" className="form-control" onChange={handleChange("name")} value={name} required={true}/>
  </div> */}

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Minimum order<span className='text-danger'>*</span></label>
  <input type="text" className="form-control"  onChange={handleChange("minOrder")} value={minOrder} required={true}/>
  <div className="form-text">Minimum order in units</div> 
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Masks per unit <span className='text-danger'>*</span></label>
  <input type="text" className="form-control"
    onChange={handleChange("maskPerUnit")} value={maskPerUnit}  required={true}/>
     <div className="form-text">Total masks per box/unit</div> 
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Price <span className='text-danger'>*</span></label>
  <input type="text" className="form-control"   onChange={handleChange("price")} value={price} required={true}/>
  <div className="form-text">Price in USD</div> 
  </div>

  <div className="col col-md-4 col-sm-6 col-12 mb-3">
  <label htmlFor="person-name" className="form-label">Stock Status <span className='text-danger'>*</span></label>
  {/* <input type="text" className="form-control"   onChange={handleChange("stockStatus")} value={stockStatus} required={true}/> */}
  
  <select name="role"
                      className="form-control form-control-sm"
                      value={stockStatus}
                      onChange={handleChange("stockStatus")}>
                      <option disabled>Inventory Status:</option>                                
                      {[true,false].map((d,index)=>
                      <option value={d} key={index}>{d?"In-Stock":"Out of stock"}</option>                                
                      )}                               
                      </select> 
  
  </div>


</div>


<div className="d-flex justify-content-center">
<button type="submit" className="btn btn-main px-10">Submit</button>
</div>


</form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default ProductDetail
