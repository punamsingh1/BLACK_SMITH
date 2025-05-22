import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // <== import it
import Home from "./components/Home";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Facility from "./components/Facility";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Stopper from "./components/Stopper";
import Crusher from "./components/Crusher";
import Conveyor from "./components/Conveyor";
import Mesh from "./components/Mesh";






// Import other pages like Services, Contact if needed

function App() {
  return (

      <>
      <Nav/>
      <ScrollToTop />
   
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Facility" element={<Facility />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Stopper/:id" element={<Stopper />} />
      <Route path="/Crusher/:id" element={<Crusher />} />
      <Route path="/Conveyor/:id" element={<Conveyor />} />
      <Route path="/Mesh/:id" element={<Mesh />} />
     
    

    </Routes>
  
  
    <Footer />
    
    </>
  );
}

export default App;
