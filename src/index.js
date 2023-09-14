import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import RootPage from './pages/Rootpage/RootPage';
import AllProducts from './pages/AllProducts/AllProducts';
import SingleProduct from './pages/SinglePage/SingleProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route index element={<Login/>}/>
          <Route path='/' element={<App />}>
            <Route path='root' element={<RootPage/>} />
            <Route path='/allproducts' element={<AllProducts/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


