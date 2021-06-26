import React from 'react'
import axios from 'axios';
import {API} from '../../Backend';
import SubProduct from './SubProduct';
import AdminNavbar from '../../Navbar/AdminNavbar'


const Products = () => {

    const [products, setProducts] = React.useState(null)

    

    React.useEffect(() => {
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
        <div>
        <AdminNavbar/>
    <h3 className='mt-5 mb-3 text-center font-600 apple-font'>All Products</h3>
            {/* name:{type:String,trim:true},
    minOrder:{type:Number,trim:true},
    maskPerUnit:{type:Number,trim:true},
    price:{type:Number,trim:true},
    stockLeft:{type:Number,trim:true},
    stockStatus:{type:Boolean,trim:true,default:true},
    createdAt:{type: Date, default: Date.now} */}
    <div className="container mb-5">
        <div className="row">
        {products && products.map(product=>
            <div key={product._id} className=" col col-md-4 col-sm-6 col-12 mt-3">
            <SubProduct product={product}/>
            </div>
    )}
        </div>
    </div>
    
        </div>
    )
}

export default Products
