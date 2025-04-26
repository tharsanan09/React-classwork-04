import Navbar from "./component/Navbar"
import Contact from "./page/Contact"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./component/Footer";


function App() {
  

  return (
    <>
      <Navbar/>
     
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
      
    </>
  )
}

export default App
