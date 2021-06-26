import React from 'react'
import img from '../../images/masklogin.jpg';
import LOGO from '../../assests/logo.png'
import Login from './Login';
import Register from './Register';


const AuthScreenMain = () => {

    const [loginScreen,SetLoginScreen] = React.useState(true)

    const handleChange=()=>{
        SetLoginScreen(!loginScreen)
    }

    return (
        <div className='auth-screen auth-screen-bg'>
              <nav className="navbar navbar-expand-lg navbar-light auth-screen-bg">
  <div className="container-fluid">
      <ul className='m-0 p-0 list-unstyled'>
            <li><img className='navbar-logo-style' src={LOGO} alt="" /></li>    
      </ul>
   
  </div>
</nav>
            <div className="container">
                <div className="row">
                    <div className="col offset-lg-1 col-lg-5 offset-lg-1 
                     col-md-6
                    d-none d-sm-none d-md-block ">
                        <div className="image-preview">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="col offset-lg-1 col-lg-4 col-md-6 col-sm-12 col-12">
                    {loginScreen? <Login Change={handleChange}/>:
                    <Register  Change={handleChange}/>}
                    </div>
                </div>
                <p className='logo-bottom-text text-center mt-5'>"WOMAN OWNED, FAMILY OPERATED, <span className='font-600' >AMERICAN MADE</span >"  
                </p>
            </div>
        </div>
    )
}

export default AuthScreenMain
