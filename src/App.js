import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Album from './Pages/MainPage';
import SignIn from './Pages/SignIn';
import Checkout from './Pages/Checkout';
import SignUp from './Pages/SignUp';
import Book from './Pages/BookTickets';
import RegistrationConfirm from './Pages/RegistrationConfirm';
import AdminView from './Pages/AdminView';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Album />} />
        <Route path='/MainPage' element={<Album/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/RegistrationConfirm' element={<RegistrationConfirm/>} />
        <Route path='/BookTickets' element={<Book/>} />
        <Route path='/AdminView' element={<AdminView/>} />
    </Routes>
    </Router>
);
}
  
export default App;