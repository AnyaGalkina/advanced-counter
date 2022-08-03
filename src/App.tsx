import React, {useEffect} from "react";
import Settings from "./components/Settings/Settings";
import Counter from "./components/Counter/Counter";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {setCount, setMaxCountValue, setStartCountValue, setToggleActive} from "./redux/counter-reducer";
import {AppStateType} from "./redux/store";

export const KEYSLOCALSTORAGE = {
    COUNT: "count-value",
    MAX: "max-count-value",
    START: "start-count-value"
}

function App() {
    const isToggleActive = useSelector<AppStateType, boolean>(state => state.counterState.isToggleActive);
    const isCounterModeActive = useSelector<AppStateType, boolean>(state => state.counterState.isCounterModeActive);
    const count = useSelector<AppStateType, number>(state => state.counterState.count);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     let countValue = localStorage.getItem(KEYSLOCALSTORAGE.COUNT);
    //     countValue && dispatch(setCount(JSON.parse(countValue)));
    // }, []);
    //
    // // works
    // useEffect(() => {
    //     localStorage.setItem(KEYSLOCALSTORAGE.COUNT, JSON.stringify(count));
    // }, [count]);

    // useEffect(() => {
    //
    //     let countValue = localStorage.getItem(KEYSLOCALSTORAGE.COUNT);
    //     // let startValue = localStorage.getItem(KEYSLOCALSTORAGE.START);
    //     // let maxValue = localStorage.getItem(KEYSLOCALSTORAGE.MAX);
    //
    //     countValue && dispatch(setCount(JSON.parse(countValue)));
    //
    //     // countValue && setCount(JSON.parse(countValue));
    //     // startValue && setStartCountValue(JSON.parse(startValue));
    //     // maxValue && setMaxCountValue(JSON.parse(maxValue));
    //
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem(KEYSLOCALSTORAGE.MAX, JSON.stringify(maxCountValue));
    // }, [maxCountValue]);
    //
    // useEffect(() => {
    //     localStorage.setItem(KEYSLOCALSTORAGE.START, JSON.stringify(startCountValue));
    // }, [startCountValue]);

    return (
        <div className="App">
            <div className={"toggle"}>
                <span>switch counter mode</span>
                <input
                    className={"checkbox"}
                    type={"checkbox"}
                    checked={isToggleActive}
                    onClick={() => {
                        dispatch(setToggleActive(!isToggleActive))
                    }}
                />
            </div>
            <div className="main">
                {isToggleActive ?

                    isCounterModeActive
                        ? <Counter isToggleActive={isToggleActive}/>
                        : <Settings isCounterModeActive={isCounterModeActive}/>
                    :
                    <>
                        <Settings/>
                        <Counter/>
                    </>
                }

            </div>
        </div>
    );
}

export default App;
