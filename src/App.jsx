
import {Routes,Route,Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavBar from "./components.jsx/NavBar"
import NotFound from "./pages/NotFound"
import Services from "./pages/Services"
import Car from "./pages/Car"
import Laptop from "./pages/Laptop"
import Products from "./pages/Products"
export default function App(){
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route caseSensitive  path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="Products" element={<Products/>}>
            <Route path="Car" element={ <Car/>}/>
            <Route path="Laptop" element={<Laptop/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}