import { useState, useEffect } from "react";
export default function useFetchData(url){
    const [data, setData] = useState(null)
    const [loading ,setLoading] = useState(true)
    const [ErrorMsg , setErrorMsg] = useState(null)
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const  response = await fetch(url)
                const result = await response.json()
                setData(result.data)
            } catch (error) {
                setErrorMsg("Data is not Vayilo") 
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    return [data, loading ,ErrorMsg]
}