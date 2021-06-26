import React, { useEffect, useState } from 'react'
import LOGO from '../assests/logo.png'
import cart from '../images/shopping-cart.png';
import {Link,useHistory} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from '../store/auth/actions';
import { Reset } from '../store/Cart/actions';
import { isAuthenticated } from '../helpers/AuthElements';


const CustomerNavbar = () => {


    const cartData = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()
    const [role, setrole] = useState([])

    useEffect(() => {
      if(isAuthenticated()){
      setrole(isAuthenticated().role.split(''))
      console.log(role)
    }
    console.log('triggered')
    }, [cart])


    const name = sessionStorage.getItem('name')
    const regg = 'sdklfhsdfe3klj432hrkljhsdf';

    const notify = (msg) => toast.info(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

      const signout=()=>{
        dispatch(logout())
        dispatch(Reset())
        history.push('/auth');
      }

      // return notify(auth.error)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-bg">
  <div className="container-fluid">
      <ul className='m-0 p-0 list-unstyled'>
      <li>
                <Link to='/'>
                <img className='navbar-logo-style' src={LOGO} alt="" />
                </Link>
                </li>   
            <li className='p-0 m-0 logo-bottom-text dark-blue '>"WOMAN OWNED, FAMILY OPERATED, <span className='font-600'>AMERICAN MADE</span >"</li>    
      </ul>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          {!auth.isLoggedIn ? 
          <>
          <img src={cart} onClick={()=>notify('Please login to show cart!')} className='cart-logo' width={27} height={27} alt="Cart logo" />
        <span className='badge badge-warning' id='lblCartCount'> 
        {cartData.data === null && '0'}
        {cartData.data !== null && cartData.data.length }
        </span></>
          :
          <Link to='/cart'>
          <img src={cart} className='cart-logo' width={27} height={27} alt="Cart logo" />
        <span className='badge badge-warning' id='lblCartCount'> 
        {cartData.data === null && '0'}
        {cartData.data !== null && cartData.data.length }
        </span>
          </Link>
        
        }
          
        </li>
        {name ? 
          <li className="nav-item dropdown">
          <Link className="nav-link text-dark" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">{name}</Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/order' className="dropdown-item small p-1 text-center" href="#">My Orders</Link></li>
            {/* <li><Link className="dropdown-item" href="#">Another action</Link></li> */}
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item small p-1 text-center"
             href="#" onClick={()=>signout()}>Logout</Link></li>
          </ul>
        </li>
        :
        <li className="nav-item">
        <Link className="nav-link text-dark" to="/auth">Login</Link>
      </li>
      }

      {role[6] === '1'?
      <li className="nav-item">
      <Link className="nav-link text-dark" to={`/${regg}/admin`}>Admin Page</Link>
    </li>:
      <li className="nav-item">
      <Link className="nav-link text-dark" to="/">Contact Us</Link>
    </li>
    }
        
        
      </ul>
    </div>
  </div>
  <ToastContainer />
</nav>
    )
}

export default CustomerNavbar
