import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import './App.css';


import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Search from "./Pages/Search";
import Gallery from "./Components/Gallery";
import Kadawatha from './Components/Lands/Kadawatha';
import Kurunegala from './Components/Lands/Kurunegala';
import Wewaldeniya from './Components/Lands/Wewaldeniya';
import Hatton from './Components/Lands/Hatton';
import Yakkala from './Components/Lands/Yakkala';
import Book from './Components/Service/Book';
import BookingSuccess from './Components/Service/BookingSuccess';
import Reserve from './Components/Service/Reserve';
import ReserveSuccess from './Components/Service/ReserveSuccess';


import Admin from './Components/Roles/AdminRoles/Admin';





import TopicBox from './Components/TopicBox';
import Navigation from './Components/Navigation';
import Images from './Components/Images';
import Content from './Components/Content';
import HomeLands from './Components/HomeLands';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import SearchLands from './Components/SearchLands';
import Facilities from './Components/Facilities';
import RegisterForm from './Components/RegisterForm';

import RegList from './Components/Roles/AdminRoles/RegList';
import RegistrationSuccess from './Components/RegistrationSuccess';
import BookList from './Components/Roles/AdminRoles/BookList';
import SellLand from './Components/Service/SellLand';
import Housing from './Components/Service/Houses/Housing';
import Appointment from './Components/Service/Appointment';
import Agent from './Components/Roles/AgentRoles/Agent';
import Customer from './Components/Roles/CustomerRoles/Customer';
import LandSearch from './Components/LandSearch';
import AppList from './Components/Roles/AdminRoles/AppList';
import Comment from './Components/Service/Comment';



function App() {
  return (

    <div className="App">
      {/* //<div><Home/> </div> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/submitRegForm" element={<RegistrationSuccess/>}/>

        <Route path="/Admin" element={<Admin/>}/>
        
        <Route path="/RegList" element={<RegList/>}/>
        <Route path="/BookList" element={<BookList/>}/>
        <Route path="/AppList" element={<AppList/>}/>

        <Route path="/Agent" element={<Agent/>}/>
        {/* <Route path="/Agent" element={<Login/>}/> */}
        <Route path="/Customer" element={<Customer/>}/>

        {/* <Route path=" /submitRegForm" element={<Success/>}/> */}


        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/bookingSuccess" element={<BookingSuccess/>}/>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/comment" element={<Comment/>}/>
        <Route path="/sell" element={<SellLand/>}/>
        <Route path="/housing" element={<Housing/>}/>


        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/yakkala" element={<Yakkala/>}/>
        <Route path="/kadawatha" element={<Kadawatha/>}/>
        <Route path="/kurunegala" element={<Kurunegala/>}/>
        <Route path="/hatton" element={<Hatton/>}/>
        <Route path="/wewaldeniya" element={<Wewaldeniya/>}/>
        <Route path="/reserveSuccess" element={<ReserveSuccess/>}/>
        </Routes>
        {/* <Link to='/gallery 'smooth>gallery</Link>
        */}
        {/* <Route path="/find" element={<LandSearch/>}/> */}
     
     
       
      {/* <Login/>
      <TopicBox/>
      <Navigation/> 
       <Images/>
      <Content/> */}
      {/* /* <Footer/> */}

        
      
      
      
    </div>
   
  );
  
}


export default App;



