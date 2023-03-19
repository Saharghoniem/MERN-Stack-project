import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//  sign in
import Signin from "./Singin";
import Signup from "./Signup";

import NotFound from "./pages/NotFound";
import Cart from "pages/cart/Cart";
import ProductDetails from "pages/details/Product-details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />


      {/* sign in added */}
      <Route  path= {"/signin"} element= {<Signin />} />  
      <Route  path= {"/signup"} element= {<Signup />} />  




      <Route path="product-details/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />

     
    </Route>
  )
);





function App() {



  return (
  
      
      <RouterProvider router={router} />
   
  );
}

export default App;
