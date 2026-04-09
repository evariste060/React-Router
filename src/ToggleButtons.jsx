import React, { useState } from 'react';

function ToggleButtons() {
// these are initialColors: ['gray','gray','gray','gray','gray']

 const [buttonColors, setButtonColors] = useState(Array(5).fill('gray'));
 const handleClick  = (index) => {
setButtonColors(prev=>{
  const newColors = [...prev]
  newColors[index] =  newColors[index] === "blue" ? "gray" : "blue"
  return newColors
 })}
 return (
   <div>
     {buttonColors.map((color, index) => (
       <button
         key={index}
         style={{ backgroundColor: color, padding: '10px', margin: '5px', border: 'none' }}
         onClick={() => handleClick(index)}
       >
         Button {index + 1}
       </button>
     ))}
   </div>
	);
}
export default ToggleButtons;

