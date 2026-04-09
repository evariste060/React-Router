import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [newNames, setNewNames] = useState([])
  useEffect(()=>{
    let index=0
    const interval = setInterval(()=>{
            if (initialNames.length>index){
                let current=initialNames[index]
                setNames(prev=>prev.slice(1))
                setNewNames(prev=>[...prev, current])
               index ++
              // clearInterval(interval)
         }
         else{
            clearInterval(interval)
         }
        
    },2000)
    return () => clearInterval(interval)
  },[])
  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {newNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;
