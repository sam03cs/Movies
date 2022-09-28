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
import PersonalProfile from './Pages/Profile';
import Edit from './Pages/EditPage';
  
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
        <Route path='/BookTickets' element={<Book/>} />
        <Route path='/Profile' element={<PersonalProfile/>} />
        <Route path='/EditPage' element={<Edit/>} />
    </Routes>
    </Router>
);
}
  
export default App;