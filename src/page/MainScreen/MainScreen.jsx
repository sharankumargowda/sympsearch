import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./../HomeScreen/HomeScreen";
import LoginScreen from "./../LoginScreen/LoginScreen";
import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header";
import MoreScreen from "./../MoreScreen/MoreScreen";
import About from "../AboutScreen/About";
import { useState } from "react";
import Contact from "../Contact/Contact";

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div className="MainContainer">
      <Header />
      <div className="BodySectionContainer">
        <div className="BodyNavbarContainer">
          <NavBar activeTab={activeTab}/>
        </div>
        <div className="BodyContentContainer">
       
          <Routes>
            <Route path="Home" element={<HomeScreen setActiveTab={setActiveTab}/>} />
            <Route path="About" element={<About  setActiveTab={setActiveTab}/>} />
            <Route path="Contact" element={<Contact  setActiveTab={setActiveTab}/>} /> 
            <Route path="Login" element={<LoginScreen  setActiveTab={setActiveTab}/>} />
            <Route path="More" element={<MoreScreen  setActiveTab={setActiveTab}/>} />
            <Route path="*" element={<Navigate to="Home"  setActiveTab={setActiveTab}/>} />
          </Routes>
         
        </div>
      </div>
    </div>
  );
}