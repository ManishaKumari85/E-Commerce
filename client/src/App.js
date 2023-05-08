import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import AboutPages from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PagenotFound from "./Pages/PagenotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/User/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import Forgotpassword from "./Pages/Auth/Forgotpassword";
import Admindashboard from "./Pages/Admin/AdminDashboard";
import AdminRoute from "./Components/Routes/AdminRoute";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Users from "./Pages/Admin/Users";
import Orders from "./Pages/User/Order";
import Profile from "./Pages/User/Profile";
import Products from "./Pages/Admin/Products";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Search from "./Pages/Search";
import ProductDetails from "./Pages/ProductDetails";
import Categories from "./Pages/Categories";
import CategoryProduct from "./Pages/CategoryProduct";
import CartPage from "./Pages/CartPage";
import AdminOrder from "./Pages/Admin/AdminOrder";
import ResetPassword from "./Pages/Auth/ResetPassword"
import Payment from "./Pages/Payment";


function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<HomePage/>} />
      <Route path="/product/:slug"  element={<ProductDetails/>} />
      <Route path="/Categories"  element={<Categories/>} />
      <Route path="/Cart"  element={<CartPage/>} />
      <Route path="/Categories/:slug"  element={<CategoryProduct/>} />
      <Route path="/search"  element={<Search/>} />
      <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path= "User"  element={<Dashboard/>} />
      <Route path= "User/orders"  element={<Orders/>} />
      <Route path= "User/payment"  element={<Payment/>} />
      <Route path= "User/profile"  element={<Profile/>} />
      </Route>

       <Route path="/dashboard" element={<AdminRoute />}>
      <Route path= "Admin"  element={<Admindashboard/>} />
      <Route path= "Admin/create-category"  element={<CreateCategory/>} />
      <Route path= "Admin/create-product"  element={<CreateProduct/>} />
      <Route path= "Admin/product/:slug"  element={<UpdateProduct/>} />
      <Route path= "Admin/Products"  element={<Products/>} />
      <Route path= "Admin/order"  element={<AdminOrder/>} />
      
      <Route path= "Admin/users"  element={<Users/>} />
      </Route> 

       <Route path="/register"  element={<Register/>} />
        <Route path="/forgotpassword"  element={<Forgotpassword/>} /> 
        <Route path="/resetpasssword/:id/:token"  element={<ResetPassword/>} /> 
       <Route path="/login"  element={<Login/>} />
      <Route path="/About"  element={<AboutPages/>} />
      <Route path="/Contact"  element={<Contact/>} />
      <Route path="/Policy"  element={<Policy/>} />
      <Route path="*"  element={<PagenotFound/>} />
      
    </Routes>
      
    </>
  );
}

export default App;

