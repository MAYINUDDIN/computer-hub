
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

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
        {/* <Route path='/login' element={<Login />}>login</Route> */}
      </Routes>

    </div>
  );
}

export default App;
