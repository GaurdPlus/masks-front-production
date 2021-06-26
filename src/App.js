import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Landing from './Components/Main/Landing';
import AuthScreenMain from './Components/Auth/AuthScreenMain';
import AdminRoute from './helpers/AdminRoute'
import { isAuthenticated } from './helpers/AuthElements';
import { useDispatch } from 'react-redux';
import { FillData } from './store/auth/actions';
// import PrivateRoute from './helpers/PrivateRoute';
import Home from './Components/Admin/Home';
import RequestDetail from './Components/Admin/RequestDetail';
import MainCart from './Components/Cart/MainCart';
import Products from './Components/Admin/Products';
import Orders from './Components/Admin/Orders';
import ProductDetail from './Components/Admin/ProductDetail';
import OrderList from './Components/Order/OrderList';
import OrderDetails from './Components/Order/OrderDetails';
import AdminOrderDetail from './Components/Admin/AdminOrderDetail';


function App() {

  const dispatch = useDispatch()

  if(isAuthenticated()){
   dispatch(FillData(isAuthenticated()))
  }

  const regg = 'sdklfhsdfe3klj432hrkljhsdf';

  return (
    <div className="App">
     
     <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/auth" component={AuthScreenMain}/>
      <Route exact path="/cart" component={MainCart}/>
      <Route exact path="/order" component={OrderList}/>
      <Route exact path="/order/:id" component={OrderDetails}/>
      <AdminRoute exact path={`/${regg}/admin`} component={Home}/>
      <AdminRoute exact path={`/${regg}/products`} component={Products}/>
      <AdminRoute exact path={`/${regg}/products/:id`} component={ProductDetail}/>
      <AdminRoute exact path={`/${regg}/orders`} component={Orders}/>
      <AdminRoute exact path={`/${regg}/orders/:id`} component={AdminOrderDetail}/>
      <AdminRoute exact path={`/${regg}/admin/req/:id`} component={RequestDetail}/>

      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
