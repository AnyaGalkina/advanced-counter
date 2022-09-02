import React, {useEffect} from "react";
import Settings from "./components/Settings/Settings";
import Counter from "./components/Counter/Counter";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {setCount, setMaxCountValue, setStartCountValue,} from "./redux/counter-reducer";
import {AppStateType} from "./redux/store";
import CheckboxInput from "./components/CheckboxInput/CheckboxInput";
import {loadState} from "./utils/local-storage";




function App() {
    const switchCounterView = useSelector<AppStateType, boolean>(state => state.toggleState.switchCounterView);
    const isCounterModeActive = useSelector<AppStateType, boolean>(state => state.counterState.isCounterModeActive);
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    console.log(state)
    console.log("loadState()", loadState());

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
            <CheckboxInput switchCounterView={switchCounterView}/>
            <div className="main">
                {switchCounterView
                    ? isCounterModeActive
                        ? <Counter switchCounterView={switchCounterView}/>
                        : <Settings/>
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
