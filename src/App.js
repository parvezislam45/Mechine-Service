import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Header from './Pages/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import RequredAuth from './RequredAuth/RequredAuth';
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path ="/checkout" element={
          <RequredAuth>
            <Checkout path ="/checkout"></Checkout>
          </RequredAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
