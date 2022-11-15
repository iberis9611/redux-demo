import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

// Kindly noted: This is my first redux counter demo, it's irrelevant to this project.
const Counter = () => {
    // read data from the store with useSelector
    const count = useSelector((state) => state.counter.count);
    // dispatch actions using useDispatch
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    // this will make sure we have a number
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    Add Amount
                </button>
                <button onClick={resetAll}>
                    Reset
                </button>
            </div>
        </div>
    )
}
export default Counter