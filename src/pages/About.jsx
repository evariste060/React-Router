import { useState,useEffect } from "react"
import NameTransfer from "../components.jsx/NameTransfer"
export default function About(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <ul>
                {users.map(user=>(<li key={user.id}>{user.address.city}</li>))}
            </ul>
            <NameTransfer/>
        </div>
    )
}