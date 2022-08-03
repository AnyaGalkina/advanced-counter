type ActionType = ReturnType<typeof setCount> | ReturnType<typeof setStartCountValue> 
    | ReturnType<typeof setError> | ReturnType<typeof setMaxCountValue> |  ReturnType<typeof setSettingMode> 
    | ReturnType<typeof setToggleActive>| ReturnType<typeof setCounterModeActive>;

export type InitStateType = typeof initState;

const SET_COUNT = "SET_COUNT";
const SET_START_VALUE = "SET_START_VALUE";
const SET_MAX_VALUE = "SET_MAX_VALUE";
const SET_ERROR = "SET_ERROR";
const SET_SETTING_MODE = "SET_SETTING_MODE";
const SET_TOGGLE_ACTIVE = "SET_TOGGLE_ACTIVE";
const SET_COUNTER_MODE = "SET_COUNTER_MODE";


//Do we still need it? NO?
let initStartValue: number = 0;
let initMaxValue: number = 5;

let initState = {
    startCountValue: 0,
    maxCountValue: 5,
    count: 0,
    error: false,
    settingMode: false,
    isToggleActive: false,
    isCounterModeActive: true,
};

//some TS warning. Why? See ts-ignore
export const counterReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case SET_COUNT:
            //@ts-ignore

            return {...state, count: action.payload.count};
        case SET_MAX_VALUE:
            return {...state, maxCountValue: action.payload.maxValue};
        case SET_START_VALUE:
            //@ts-ignore

            return {...state, startCountValue: action.payload.startCountValue};
        case SET_ERROR:
            return {...state, error: action.payload.error};
        case SET_SETTING_MODE:
            return {...state, settingMode: action.payload.settingMode};
        case SET_COUNTER_MODE:
            return {...state, isCounterModeActive: action.payload.isCounterModeActive};
        case SET_TOGGLE_ACTIVE:
            return {...state, isToggleActive: action.payload.isToggleActive};
        default:
            return state;
    }
}

//Ask opinion without payload === more short code, without we don't have consistancy?
export const setCount = (count: number) => {
    return {type: SET_COUNT, payload: {count}} as const
}

export const setStartCountValue = (startCountValue: number) => {
    return {type: SET_START_VALUE, payload: {startCountValue}} as const
}

export const setMaxCountValue = (maxValue: number) => {
    return {type: SET_MAX_VALUE, payload: {maxValue}} as const
}

export const setError = (error: boolean) => {
    return {type: SET_ERROR, payload: {error}} as const
}

export const setSettingMode = (settingMode: boolean) => {
    return {type: SET_SETTING_MODE, payload: {settingMode}} as const
}

export const setToggleActive = (isToggleActive: boolean) => {
    return{type: SET_TOGGLE_ACTIVE,  payload: {isToggleActive}} as const
}

export const setCounterModeActive = (isCounterModeActive: boolean) => {
    return{type: SET_COUNTER_MODE, payload:{isCounterModeActive}} as const
}