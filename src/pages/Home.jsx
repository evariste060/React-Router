import { useState } from "react"
import { ThemeContext } from "../components.jsx/ThemeContext"
import { useContext } from "react"
export default function Home(){
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [errorMsg,setErrorMsg] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const {dark,toggleTheme} = useContext(ThemeContext)
    const handleChange = (e)=>{
        if (e.target.name == "userName"){
            setName(e.target.value)
        }
        else{
            setPassword(e.target.value)
            if (password.length<8){
                setErrorMsg("Password is less than 8 Characters")
            }
            else{
                setErrorMsg("")
            }
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setName("")

    }
    return (
       <div className={`${dark?"bg-gray-700":""} flex items-center border-2 border-blue-500 flex-col gap-12`}>
            <h1  className="text-2xl font-semibold text-blue-500 text-center">
                This is Home Page
            </h1>
            <form onSubmit={handleSubmit}className="flex flex-col gap-4" c >
                <label> Name:
                    <input
                    type="text"
                    name="userName"
                    value={name}
                    onChange={handleChange}
                    />

                </label>
                <label> Password:
                    <input
                    className=""
                    type={showPassword?"text":"password"}
                     name="password"
                     value={password}
                     onChange={handleChange}
                      />

                </label>
                <button onClick={()=> setShowPassword(!showPassword)} className="border rounded-full bg-blue-800 text-white">Show Password</button>
                <div className="text-red-600">
                    {errorMsg}
                </div>
                <button type="submit" className="border rounded-2xl bg-blue-600 text-white text-2xl">
                    submit
                </button>
                <button onClick={()=>toggleTheme()} className={`border rounded-2xl bg-blue-600 text-white`}>
                    Dark Mode
                </button>

            </form>
       </div>
    
    )
}
