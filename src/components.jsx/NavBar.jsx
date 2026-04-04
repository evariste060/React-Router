import { NavLink,Outlet } from "react-router-dom"
export default function NavBar(){
    return (
       <div>
          <header className="flex justify-around text-xl bg-blue-400 text-white ">
            <NavLink className={({isActive})=> isActive? "text-white":"text-black"} to="/">Home</NavLink> 
            <NavLink className={({isActive})=> isActive? "text-white":"text-black"} to="/about">About</NavLink> 
            <NavLink className={({isActive})=> isActive? "text-white":"text-black"} to="/contact">Contact</NavLink>
            <NavLink className={({isActive})=> isActive? "text-white":"text-black"} to="/Services">Services</NavLink>
            <NavLink className={({isActive})=> isActive? "text-white":"text-black"} to="/Products">Products</NavLink>
        </header>
       </div>
    )
}