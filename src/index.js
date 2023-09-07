import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import RootPage from './pages/Rootpage/RootPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route index element={<Login/>}/>
         <Route path='/' element={<App />}>
          <Route path='root' element={<RootPage/>} />
         </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


