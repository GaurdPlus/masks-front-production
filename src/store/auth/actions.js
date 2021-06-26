import {API} from '../../Backend';
import axios from 'axios';

export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };

 
export const logout = () =>{
  sessionStorage.removeItem('cpissq')
  sessionStorage.removeItem('mail')
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('rjkssm')
  return {
    type: 'LOGOUT'
} 
}  

export const FillData=(data)=>{
  return {
    type:'FillData',
    payload:data
  }
}


export const login = (data) => async dispatch => {
    dispatch({type:'LOADING'})
    try{
        const res = await axios.post(`${API}/signin`,data) 
        // console.log(res.data)
        const randNum1 = (Math.floor(100000 + Math.random() * 900000).toString());
        const randNum2 = (Math.floor(100000 + Math.random() * 900000).toString());
        const role = res.data.role;
        /// should also expect a Company ID, to store it and use accordingly
        sessionStorage.setItem('cpissq',res.data.token)
        sessionStorage.setItem('mail',res.data.email)
        sessionStorage.setItem('name',res.data.name)
        sessionStorage.setItem('rjkssm',`${randNum1}${role}${randNum2}`)
        // sessionStorage.setItem('id',res.data.id)
        dispatch({
            type: 'LOGGED_IN_USER',
            payload: res.data,
        })
    }
    catch(e){
        dispatch({
            type: 'REQUEST_FAILED',
            payload: 'Incorrect Email / Password, try again',
        })
    }
}


export const register = (data) => async dispatch => {
  dispatch({type:'LOADING'})
  try{
      const res = await axios.post(`${API}/signup`,data) 
      // // console.log(res.data)
      // const randNum1 = (Math.floor(100000 + Math.random() * 900000).toString());
      // const randNum2 = (Math.floor(100000 + Math.random() * 900000).toString());
      // const role = res.data.role;
      // /// should also expect a Company ID, to store it and use accordingly
      // sessionStorage.setItem('cpissq',res.data.token)
      // sessionStorage.setItem('mail',res.data.email)
      // sessionStorage.setItem('name',res.data.name)
      // sessionStorage.setItem('rjkssm',`${randNum1}${role}${randNum2}`)
      // sessionStorage.setItem('id',res.data.id)
      dispatch({
          type: 'REGISTERED_USER',
          payload: res.data,
      })
  }
  catch(e){
    // if(e.status === 422){
    //   dispatch({
    //     type: 'REQUEST_FAILED',
    //     payload: 'Email already Exists, try logging in.',
    // })
    
    // }
    // if(e.status === 400){
    //   dispatch({
    //     type: 'REQUEST_FAILED',
    //     payload:'Something went wrong, please try again',
    // })
    // }
    console.log(e)
      
  }
}