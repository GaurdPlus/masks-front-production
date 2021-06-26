const initialState = {
    loading:false,
    error:null,
    success:null,
    user:null,
    isLoggedIn:false,
  }
 
  const authReducer = (state = initialState,action)=>{
  switch (action.type) {

    case 'LOADING':
        return {
            ...state,
            loading:true
        }

    case 'LOGGED_IN_USER':
        return{
          ...state,
          user:action.payload,
          isLoggedIn:true,
          loading:false,
          error:null
        }

    case 'REGISTERED_USER':
      return{
        ...state,
        user:null,
        isLoggedIn:false,
        loading:false,
        error:null,
        success:action.payload,
      }    

    case 'REQUEST_FAILED':
        return {
          ...state,
          loading:false,
          success:null,
          error:action.payload
        }

    case 'LOGOUT':
      return{
        loading:false,
        error:null,
        success:null,
        user:null,
        isLoggedIn:false,
      }    

    case 'FillData':
      return{
        loading:false,
        error:null,
        success:null,
        user:action.payload,
        isLoggedIn:true,
      }  

   
    default:
       return state;
    }
  }

  export default authReducer