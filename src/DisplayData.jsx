import useFetch from "./useFetch";
export default function DisplayData(){
    const [data,loading,error] = useFetch('https://dummy.restapiexample.com/api/v1/employees')
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    console.log(data)
    return (
        <div>
            <h1>Hello React</h1>
            <h2>Start Editing to see same magic happen!</h2>
            <ul>
            {data && data.map(employee => (<li key={employee.id}>{employee.employee_name}</li>))}
            </ul>
        </div>

    )

}