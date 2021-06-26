const initialState = {
  loading:true,
  error:null,
  success:null,
  data :null,
  shippingDetails:null
}
 
  const cartReducer = (state = initialState,action)=>{
  switch (action.type) {

    case 'LOADING':
      return {
          ...state,
          loading:true
      }

    case 'RESET':
      return {
        loading:true,
        error:null,
        success:null,
        data :null,
        shippingDetails:null
      }  

    case 'ADD_ITEM':
      return{
        ...state,
        data:action.payload,
        success:true,
        loading:false,
        error:null
      }

    case 'ADD_SHIPPING':
      return{
        ...state,
        shippingDetails:action.payload
      }  

    case 'REQUEST_FAILED':
      return {
        ...state,
        success:false,
        loading:false,
        error:action.payload
      }
   
    default:
       return state;
    }
  }

  export default cartReducer