import React,{useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../../store/auth/actions';


const Register = ({Change}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('wrong buddy')

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth);
    
    const handleSubmit=e=>{
        e.preventDefault()
        const data = {email,password,name,phone}
        dispatch(register(data))
    }



    return (
        <div>
             <div>
            <div className='center-form align-middle card mt-3 shadow'>
                <h2 className='text-center mt-3 font-900 apple-font mb-2'>Sign Up</h2>
                <p 
                className={`container 
                ${auth.success && auth.success.includes('already Exists') && 'text-danger'}
                ${auth.success && auth.success.includes('something') && 'text-danger'}
                ${auth.success && auth.success.includes('created') && 'text-success'}
                 text-center mb-0`}>
                    {auth.success}</p>
                <form className='container' onSubmit={handleSubmit}>
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

    <div className='mb-2'>
    <label htmlFor="person-name" className="form-label font-600">Name <span className='text-danger'>*</span></label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} required={true}/>
    </div>

    <div className='mb-2'>
    <label htmlFor="person-name" className="form-label font-600">Phone <span className='text-danger'>*</span></label>
    <input type="text" className="form-control" onChange={(e)=>setPhone(e.target.value)} value={phone} required={true}/>
    </div>


       <div className="d-flex justify-content-center mt-4 mb-4">
       <button className='btn btn-main px-5 font-500
         border-radius-50' type="submit">Create Account</button>
       </div>

       <div className="mt-3">
           <p className='font-600 small'>Already a member? <span className='main-color pointer' onClick={()=>Change()}>Sign in</span></p>
       </div>

                </form>
            </div>
        </div>
        </div>
    )
}

export default Register
