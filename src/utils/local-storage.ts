import {AppStateType} from "../redux/store";

export const saveState = (state: AppStateType) => {
    localStorage.setItem("state", JSON.stringify(state))
    // localStorage.setItem(KEYS_LOCAL_STORAGE.COUNT, JSON.stringify(state.counterState.count));
    // localStorage.setItem(KEYS_LOCAL_STORAGE.MAX, JSON.stringify(state.counterState.maxCountValue));
    // localStorage.setItem(KEYS_LOCAL_STORAGE.START, JSON.stringify(state.counterState.startCountValue));
};

export const loadState = () => {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) {
        return undefined;
    }
    return JSON.parse(serializedState)
};


//
// export const loadState = () => {
//     const serializedState = localStorage.getItem(KEYS_LOCAL_STORAGE.COUNT);
//     const serializedStateMax = localStorage.getItem(KEYS_LOCAL_STORAGE.MAX);
//     const serializedStateStart = localStorage.getItem(KEYS_LOCAL_STORAGE.START);
//     if (!serializedState && !serializedStateMax && !serializedStateStart) {
//         return undefined;
//     }
//     return {
//         count : Number(JSON.parse(serializedState!)), maxCountValue:Number(JSON.parse(serializedStateStart!)), startCountValue:Number(JSON.parse(serializedStateMax!))
//     }
// };


//
// enum KEYS_LOCAL_STORAGE {
//     COUNT = "count-value",
//     MAX = "max-count-value",
//     START = "start-count-value"
// }

