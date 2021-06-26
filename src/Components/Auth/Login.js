import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/auth/actions';
import { useHistory } from "react-router-dom";



const Login = ({Change}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory();

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth);

    const notify = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        const handleSubmit =(e)=>{
            e.preventDefault()
            const data = {email,password}
                dispatch(login(data))
        }

        useEffect(() => {
            if(!auth.isLoggedIn && auth.error){
                return notify(auth.error)
            }
        }, [auth])

        useEffect(() => {
            if(auth.isLoggedIn){
                return history.push('/')
            }
        }, [auth])

    
    return (
        <div>
            <div className='center-form align-middle card mt-5 shadow'>
                <h2 className='text-center mt-3 font-900 apple-font'>Sign in</h2>
                <form className='container'  onSubmit={handleSubmit}>
                <div className='mt-4 mb-4 font-600'>
    <label htmlFor="email" className="form-label">Email address <span className='text-danger'>*</span></label>
    <input type="email"  onChange={(e)=>setEmail(e.target.value)} 
    value={email}  className="form-control" id="email" aria-describedby="emailHelp"
     required={true}/>
    </div>

    <div className='mb-2'>
    <label htmlFor="person-name" className="form-label font-600">Password <span className='text-danger'>*</span></label>
    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} required={true}/>
    </div>

       <div className="d-flex justify-content-center mt-4 mb-4">
       <button className='btn btn-main px-10 font-500
         border-radius-50' type="submit">Login</button>
       </div>


       <div className="mt-3">
           <p className='font-600 small'>need an account? <span className='main-color pointer' onClick={()=>Change()}>Create account.</span></p>
       </div>

                </form>
        <ToastContainer />
            </div>
        </div>
    )
}

export default Login
