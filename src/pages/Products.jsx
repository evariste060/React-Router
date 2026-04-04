import { NavLink, Outlet} from "react-router-dom"
export default function Products(){
    return (
       <div>
         <div className="text-xl text-center font-semibold flex gap-12">
            <NavLink to="/Products/car">Car</NavLink>
            <NavLink to ="/Products/laptop">Laptop</NavLink>

        </div>
        <div>
            <Outlet/>
        </div>
       </div>
    )
}