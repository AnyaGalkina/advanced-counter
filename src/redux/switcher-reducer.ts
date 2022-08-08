import {ActionType} from "./store";

export type InitStateType = typeof initState;
const SET_TOGGLE_ACTIVE = "SET_TOGGLE_ACTIVE";


let initState = {
    switchCounterView: false,
};

export const switcherReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case SET_TOGGLE_ACTIVE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const setSwitchCounterView = (switchCounterView: boolean) => {
    return{type: SET_TOGGLE_ACTIVE,  payload: {switchCounterView}} as const
}
