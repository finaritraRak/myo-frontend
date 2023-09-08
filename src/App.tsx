import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/assets/css/oneui.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//import '../node_modules/bootstrap/assets/js/oneui.app.min.js';
import Home from './Pages/Home/Home';
import Table from './Pages/Product/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Pages/Blog/Create';
import CreateProduct from './Pages/Product/Create';
import BlogDetails from './Pages/Blog/BlogDetails';
import ProductDetails from './Pages/Product/ProductDetails';
import NotFound404 from './Components/NotFound404';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer';
import CreateImage from './Pages/Gallery/CreateImage';
import CreateFormation from './Pages/Formations/CreateFormation';
import FormationDetails from './Pages/Formations/FormationDetails';
import Formation from './Pages/Formations/Formations';
import QuizRoom from './Pages/Quiz/QuizRoom';
import Apropos from './Pages/Portfolio/Apropos';

import UserLogin from './Components/User/Auth/Login';
import UserRegister from './Components/User/Auth/Register';

//import Products from './Pages/Product/Products';
//import AddProduct from './Pages/Product/AddProduct';
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Table/>}></Route>
            <Route path='/createblog' element={<Create />}></Route>
            <Route path='/create' element={<CreateProduct />}></Route>
            <Route path='/createImage' element={<CreateImage />}></Route>
            <Route path='/product/:id' element={<BlogDetails />}></Route>
           
            <Route path='/formations/:id' element={<FormationDetails />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            
            <Route path='/formations' element={<Formation />}></Route>
            <Route path='/newformation' element={<CreateFormation />}></Route>
            <Route path='/quizroom' element={<QuizRoom />}></Route>

            <Route path='/apropos' element={<Apropos />}></Route>

            
            <Route path='/login' element={<UserLogin />}></Route>
            <Route path='/register' element={<UserRegister />}></Route>
           



            <Route path='*' element={<NotFound404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;
