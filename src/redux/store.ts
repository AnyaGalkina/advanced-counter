import {
    counterReducer,
    setCount, setCounterModeActive,
    setError,
    setMaxCountValue,
    setSettingMode,
    setStartCountValue, setValues,
} from "./counter-reducer";
import {combineReducers, legacy_createStore} from "redux";
import {setSwitchCounterView, switcherReducer} from "./switcher-reducer";

export type ActionType =
    ReturnType<typeof setCount>
    | ReturnType<typeof setStartCountValue>
    | ReturnType<typeof setError>
    | ReturnType<typeof setMaxCountValue>
    | ReturnType<typeof setSettingMode>
    | ReturnType<typeof setSwitchCounterView>
    | ReturnType<typeof setCounterModeActive>
    | ReturnType<typeof setValues>;

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    counterState: counterReducer,
    toggleState: switcherReducer
})

export let store = legacy_createStore(rootReducer);