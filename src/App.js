import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DonateNow from "./Components/DonateNow";
//import Feedback from './Components/Feedback';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Volunteer from "./Components/Volunteer";
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
   <Header/>
 <Routes>
   <Route path='/'element={<Home/>} />
   <Route path='/about'element={<About/>} />
   <Route path='/volunteer'element={<Volunteer/>} />
   <Route path='/contact'element={ <Contact/>} />
   <Route path='/donatenow'element={<DonateNow/>} />
 </Routes>  
    {/* <Feedback/> */}
 <Footer/>  
   </BrowserRouter> 
    </React.Fragment>
  );
}

export default App;
