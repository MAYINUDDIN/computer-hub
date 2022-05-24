
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BuyNow from './Pages/BuyNow/BuyNow';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <hr />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        {/* <Route path='/p' element={<PopulerItems />}>Home</Route> */}
        {/* <Route path='/about' element={<About />}>Home</Route> */}
        <Route path='/login' element={<Login />}>login</Route>
        <Route path='/signup' element={<Signup />}>signup</Route>
        <Route path='/buynow' element={
          <RequireAuth>
            <BuyNow />
          </RequireAuth>
        }>Buy Now</Route>
      </Routes>

    </div>
  );
}

export default App;
