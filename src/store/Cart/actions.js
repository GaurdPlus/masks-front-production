import {API} from '../../Backend';
import axios from 'axios';

export const token = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (sessionStorage.getItem("cpissq")) {
      return (sessionStorage.getItem("cpissq"));
    } else {
      return false;
    }
  };


export const AddToCart = (data) => async dispatch => {
    dispatch({type:'LOADING'})
    try{
        const res = await axios.post(`${API}/cart/add-item-to-cart`,data
        , { headers: {"Authorization" : `Bearer ${token()}`} })
        
        dispatch({
            type: 'ADD_ITEM',
            payload: res.data,
        })
    }
    catch(e){
        dispatch({
            type: 'REQUEST_FAILED',
            payload: e,
        })
    }
}

export const Reset=()=>{
  return {
    type: 'RESET',
}
}

export const AddShipping=(data)=>{
  return {
    type: 'ADD_SHIPPING',
    payload:data
}
}

export const GetCart = () => async dispatch => {
  dispatch({type:'LOADING'})
  try{
      const res = await axios.get(`${API}/cart/get-all-cart`
      , { headers: {"Authorization" : `Bearer ${token()}`} })

      dispatch({
          type: 'ADD_ITEM',
          payload: res.data,
      })
  }
  catch(e){
      dispatch({
          type: 'REQUEST_FAILED',
          payload: e,
      })
  }
}

export const EditCart = (data) => async dispatch => {
  dispatch({type:'LOADING'})
  try{
      const res = await axios.put(`${API}/cart/edit-items-to-cart/`,
      data, { headers: {"Authorization" : `Bearer ${token()}`} })

      console.log(res.data)
      dispatch({
          type: 'ADD_ITEM',
          payload: res.data,
      })
  }
  catch(e){
      dispatch({
          type: 'REQUEST_FAILED',
          payload: e,
      })
  }
}

// /cart/edit-items-to-cart/60c35414b0ddae1e04d46316





