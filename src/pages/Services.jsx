import { useState, useReducer } from "react";
function reducer(state,action) {
    switch(action.type){
        case "increment":
           return  {count: state.count +1}
        case "Decrement":
           return  {count : state.count -1}
        default:
            return state
    }
    
}
function Services() {
    const [state,dispatch] = useReducer(reducer,{count:0})
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl">{state.count}</h1>
            <button  className="w-40 bg-blue-500  font-bold text-2xl rounded-2xl"  onClick={()=>dispatch({type : "increment"})}>+</button>
            <button className="w-40 bg-blue-500  font-bold text-2xl  rounded-2xl" onClick={() =>dispatch({type : "Decrement"})}>-</button>
        </div>
    )
 }

export default Services; 