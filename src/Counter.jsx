import React, { useState, useReducer } from 'react';

const reducer =  (state, action)=> {
    if( action === 'increment') return state + 1;
    else if (action === 'decrement') return state > 0 ? state - 1 : state;
    return state;
}
function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  return (
    <div>
        <button className='bg-blue-600 w-24 h-8 text-white' onClick={() =>dispatch('increment')}>Increment</button>
      
        <p>Count: {count}</p>
      
      <button className='bg-blue-600 w-24 h-8 text-white' onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  );
}

export default Counter;
