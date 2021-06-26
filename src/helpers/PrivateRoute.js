import React from "react";
import { Route, Redirect } from "react-router-dom";
import {isAuthenticated,checkToken} from './AuthElements'



const PrivateRoute = ({ component: Component, ...rest }) => {
const role = isAuthenticated().role.split('');
return(
    <Route 
    {...rest}
    render = {
      function(props){
        // if(isAutheticated() && isAutheticated().user.role === 1 && checkToken()&&checkCompany()){
        if(isAuthenticated() && role[6] === '1' && checkToken()){
      return <Component {...props} /> 
      }
      else if(isAuthenticated() && role[6] === '0' && checkToken()){
        return <Component {...props} /> 
      }else{
      return <Redirect
                to={{
                  pathname: "/auth",
                  state: { from: props.location }
                }}
              />
      }
    }
  }
    />
  )
}

export default PrivateRoute
