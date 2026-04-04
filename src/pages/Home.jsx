import { useState } from "react"
export default function Home(){
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [errorMsg,setErrorMsg] = useState("")
    const handleChange = (e)=>{
        if (e.target.name == "userName"){
            setName(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(name)
        setName("")

    }
    return (
       <div className="flex items-center border-2 border-blue-500 flex-col gap-12">
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
                     type="password"
                     name="password"
                     value={password}
                     onChange={handleChange}
                      />

                </label>
                {errorMsg}
                <button type="submit" className="border-2 text-blue-500 border-black">
                    submit


                </button>
            </form>
       </div>
    
    )
}
