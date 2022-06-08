import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add5, byAmount, decrement, increment, reset, sub5 } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter View</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>{dispatch(increment()) }}>Increment</button>
            <button onClick={()=>{dispatch(decrement()) }}>Decrement</button>
            <button onClick={()=>{dispatch(add5()) }}>Add 5</button>
            <button onClick={()=>{dispatch(sub5()) }}>Subtract 5 </button>
            <button onClick={()=>{dispatch(byAmount(10))}}>Add 10</button>
            <button onClick={()=>{dispatch(reset()) }}>Reset</button>
            
        </div>
    );
};

export default CounterView;