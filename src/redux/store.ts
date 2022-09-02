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
import {loadState, saveState} from "../utils/local-storage";

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

export let store = legacy_createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState(store.getState())
})


// const StorageState = loadState()

//
// export let store = legacy_createStore(rootReducer,
//     //@ts-ignore
//     {...rootReducer,counterState:{...rootReducer.counterState,
//             count:StorageState?.count}});
//
// store.subscribe(() => {
//     saveState( store.getState().counterState)
// })

// export let store = legacy_createStore(rootReducer,
//     //@ts-ignore
//     {...rootReducer,counterState:{...rootReducer.counterState, count:StorageState?.count, maxCountValue: StorageState?.maxCountValue, startCountValue: StorageState?.startCountValue}});
//
// store.subscribe(() => {
//     saveState(store.getState())
// })
//
