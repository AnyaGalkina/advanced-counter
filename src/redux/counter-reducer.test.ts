import {
    counterReducer,
    InitStateType,
    setCount, setCounterModeActive,
    setError,
    setMaxCountValue,
    setSettingMode,
    setStartCountValue,
} from "./counter-reducer";

let initState: InitStateType;

beforeEach(() => {
    initState = {
        startCountValue: 0,
        maxCountValue: 5,
        count: 0,
        settingMode: false,
        error: false,
        isCounterModeActive: true,
    };
})

test("count should be set", () => {
    let newState = counterReducer(initState, setCount(3));

    expect(newState.count).toBe(3);
    expect(initState.count).toBe(0);
})

test("startCountValue should be updated", () => {
    let newState = counterReducer(initState, setStartCountValue(3));

    expect(newState.startCountValue).toBe(3);
    expect(initState.startCountValue).toBe(0);
})


test("maxCountValue should be  updated", () => {
    let newState = counterReducer(initState, setMaxCountValue(10));

    expect(newState.maxCountValue).toBe(10);
    expect(initState.maxCountValue).toBe(5);
})


test("settingMode should be changed to true", () => {
    let newState = counterReducer(initState, setSettingMode(true));

    expect(newState.settingMode).toBeTruthy();
    expect(initState.settingMode).toBeFalsy();
})


test("error should be changed to true", () => {
    let newState = counterReducer(initState, setError(true));

    expect(newState.error).toBeTruthy();
    expect(initState.error).toBeFalsy();
})

test("isCounterModeActive should be changed to false", () => {
    let newState = counterReducer(initState, setCounterModeActive(false));

    expect(newState.isCounterModeActive).toBeFalsy();
    expect(initState.isCounterModeActive).toBeTruthy();
})


