import { useState, useEffect } from "react";
function useFetch(url){
    if(!url) return;
    const [data ,setData]  = useState(null)
    const [error ,setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      const fetchData = async () => {
           try {
           const response = await fetch(url)
           if(!response.ok) throw new Error("Fetch Failed Please!")
           const result =  await response.json()
           //console.log(result)
            setData(result.data)
           // setLoading(false)
           } catch (error) {
            setError(error)
            //setLoading(false)
            
           }finally{
            setLoading(false)
           }

        }
        fetchData();
    },[])
    return {data,loading,error}
}
export default useFetch