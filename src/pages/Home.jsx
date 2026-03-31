import { Link } from "react-router-dom"
export default function Home(){
    return (
        <header className="flex font-semibold text-xl border border-blue-500 justify-evenly m-2">
            <Link to="/">Home</Link> | {""}
            <Link to="/about">About</Link>  | {""}
            <Link to="/contact">Services</Link>

        </header>
    )
}