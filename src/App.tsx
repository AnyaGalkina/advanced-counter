import React, {useEffect, useState} from "react";
import Settings from "./components/Settings/Settings";
import Counter from "./components/Counter/Counter";
import './App.css';


export const KEYSLOCALSTORAGE = {
    COUNT: "count-value",
    MAX: "max-count-value",
    START: "start-count-value"
}

let initStartValue = 0;
let initMaxValue = 5;

function App() {

    const [startCountValue, setStartCountValue] = useState(initStartValue);
    const [maxCountValue, setMaxCountValue] = useState(initMaxValue);
    const [count, setCount] = useState<string | number>(startCountValue);
    const [error, setError] = useState(false);
    const [isSettingsActive, setIsSettingsActive] =useState(false);

    useEffect(() => {

        let countValue = localStorage.getItem(KEYSLOCALSTORAGE.COUNT);
        let startValue = localStorage.getItem(KEYSLOCALSTORAGE.START);
        let maxValue = localStorage.getItem(KEYSLOCALSTORAGE.MAX);

        countValue && setCount(JSON.parse(countValue));
        startValue && setStartCountValue(JSON.parse(startValue));
        maxValue && setMaxCountValue(JSON.parse(maxValue));

    }, []);

    useEffect(() => {
        if (typeof (count) === "number") {
            localStorage.setItem(KEYSLOCALSTORAGE.COUNT, JSON.stringify(count));
        }
    }, [count]);

    useEffect(() => {
        localStorage.setItem(KEYSLOCALSTORAGE.MAX, JSON.stringify(maxCountValue));
    }, [maxCountValue]);

    useEffect(() => {
        localStorage.setItem(KEYSLOCALSTORAGE.START, JSON.stringify(startCountValue));
    }, [startCountValue]);

    const incrementCount = () => {
        typeof (count) === "number" &&
        setCount(count + 1);
    }

    const clearCount = () => {
        setCount(startCountValue);
    }

    const isIncActive = typeof (count) === "string" ? true : count === maxCountValue;
    const isResetActive = typeof (count) === "string" ? true : count === startCountValue;

    return (
        <div className="App">
            {/*{isSettingsActive  ?*/}
            <Settings
                maxCountValue={maxCountValue}
                startCountValue={startCountValue}
                setMaxCountValue={setMaxCountValue}
                setStartCountValue={setStartCountValue}
                setCount={setCount}
                error={error}
                setError={setError}
                setIsSettingsActive={setIsSettingsActive}
            />
            {/*:*/}
            <Counter
                count={count}
                maxCountValue={maxCountValue}
                error={error}
                isIncActive={isIncActive}
                isResetActive={isResetActive}
                incrementCount={incrementCount}
                clearCount={clearCount}
                setIsSettingsActive={setIsSettingsActive}
                />
            {/*}*/}
        </div>
    );
}

export default App;
