
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import BuyNow from './Pages/BuyNow/BuyNow';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Notfound from './Pages/NotFound/Notfound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import PrivateRoute from '../src/Pages/PrivateRoute/PrivateRoute';
import Dashboard from '../src/Pages/Dashboard/Dashboard';
import MyOrder from '../src/Pages/Dashboard/MyOrder';
import AddReview from '../src/Pages/Dashboard/AddReview';
import MyProfile from '../src/Pages/Dashboard/MyProfile';
import AllOrders from '../src/Pages/Dashboard/AllOrders';
import AddProducts from '../src/Pages/Dashboard/AddProducts';
import ManageProducts from '../src/Pages/Dashboard/ManageProducts';
import AllUsers from '../src/Pages/Dashboard/AllUsers';
import PrivateAdmin from '../src/Pages/PrivateRoute/PrivateAdmin';


function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <hr />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/profile' element={<Portfolio />}>Home</Route>
        <Route path='/blogs' element={<Blogs />}>Home</Route>
        <Route path='/login' element={<Login />}>login</Route>
        <Route path='/signup' element={<Signup />}>signup</Route>
        <Route path='*' element={<Notfound />}>signup</Route>

        <Route path='/buynow/:id' element={
          <RequireAuth>
            <BuyNow />
          </RequireAuth>
        }>Buy Now</Route>

        <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>}>

          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='allorder' element={<PrivateAdmin><AllOrders></AllOrders></PrivateAdmin>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allorder' element={<PrivateAdmin><AllOrders></AllOrders></PrivateAdmin>}></Route>
          <Route path='addproducts' element={<PrivateAdmin><AddProducts></AddProducts></PrivateAdmin>}></Route>
          <Route path='allproducts' element={<PrivateAdmin><ManageProducts></ManageProducts></PrivateAdmin>}></Route>
          <Route path='allusers' element={<PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>}></Route>
        </Route>




      </Routes>


      {/* <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}> </Route> */}
      {/* <Route index element={<MyOrder></MyOrder>}></Route>
      <Route path='addreview' element={<AddReview></AddReview>}></Route>
      <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
      <Route path='allorder' element={<PrivateAdmin><AllOrders></AllOrders></PrivateAdmin>}></Route>
      <Route path='addproducts' element={<PrivateAdmin><AddProducts></AddProducts></PrivateAdmin>}></Route>
      <Route path='allproducts' element={<PrivateAdmin><ManageProducts></ManageProducts></PrivateAdmin>}></Route>
      <Route path='allusers' element={<PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>}></Route> */}


      <Footer></Footer>
    </div>
  );
}

export default App;
