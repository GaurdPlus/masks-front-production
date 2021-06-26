import React from 'react'
import ImageHelper from '../../helpers/ImageHelper'
import {Link} from 'react-router-dom'

const SubProduct = ({product}) => {
    return (
        <div>
            <div key={product._id}>
                    <div className="card shadow-lg">
                        <div className="container">
                    <div>
                    <ImageHelper name={product.name} />
                    </div>
                    <p className='mb-0 font-small-bold'>{product.name}</p>
                    <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Price: <span className='float-end'>${product.price}</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Min Order: <span className='float-end'>{product.minOrder} units</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Masks/Unit: <span className='float-end'>{product.maskPerUnit} masks</span> </p>
                <hr className='mt-2 mb-2'/>
                <p className="mb-0 font-13">Inventory: <span className='float-end'>{product.stockStatus? "In-Stock":"Out of stock"}</span> </p>
                <hr className='mt-2 mb-2'/>


                    {/* ======== */}
                    <div className="py-3">
                        <Link to={`/sdklfhsdfe3klj432hrkljhsdf/products/${product._id}`}>
                <button className='btn btn-sm btn-main width-100p'>View / Edit Product</button></Link>
                </div>


                    {/* ======= */}
                    
                    {/* <div className="d-flex justify-content-center mb-3">
                       
                    <AddToCartButton product={product._id} units={product.minOrder}/>
                        
                    </div> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SubProduct
