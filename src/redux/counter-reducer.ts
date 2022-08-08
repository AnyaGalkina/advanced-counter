import {ActionType} from "./store";

export type InitStateType = typeof initState;

const SET_COUNT = "SET_COUNT";
const SET_START_VALUE = "SET_START_VALUE";
const SET_MAX_VALUE = "SET_MAX_VALUE";
const SET_ERROR = "SET_ERROR";
const SET_SETTING_MODE = "SET_SETTING_MODE";
const SET_COUNTER_MODE = "SET_COUNTER_MODE";
const SET_ALL_VALUSE ="SET_ALL_VALUSE";


let initState = {
    startCountValue: 0,
    maxCountValue: 5,
    count: 0,
    error: false,
    settingMode: false,
    isCounterModeActive: true,
};


export const counterReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case SET_COUNT:
        case SET_MAX_VALUE:
        case SET_START_VALUE:
        case SET_ERROR:
        case SET_SETTING_MODE:
        case SET_COUNTER_MODE:
        case SET_ALL_VALUSE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const setCount = (count: number) => {
    return {type: SET_COUNT, payload: {count}} as const
}

export const setStartCountValue = (startCountValue: number) => {
    return {type: SET_START_VALUE, payload: {startCountValue}} as const
}

export const setMaxCountValue = (maxCountValue: number) => {
    return {type: SET_MAX_VALUE, payload: {maxCountValue}} as const
}

export const setError = (error: boolean) => {
    return {type: SET_ERROR, payload: {error}} as const
}

export const setSettingMode = (settingMode: boolean) => {
    return {type: SET_SETTING_MODE, payload: {settingMode}} as const
}

export const setCounterModeActive = (isCounterModeActive: boolean) => {
    return{type: SET_COUNTER_MODE, payload:{isCounterModeActive}} as const
}

export const setValues = (startCountValue: number, maxCountValue: number) => {
    return{
        type: SET_ALL_VALUSE,
        payload:{
            startCountValue,
            maxCountValue,
            count: startCountValue,
            settingMode: false,
            isCounterModeActive: true,
        }} as const
}