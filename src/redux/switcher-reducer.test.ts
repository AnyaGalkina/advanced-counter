import {InitStateType, setSwitchCounterView,  switcherReducer,} from "./switcher-reducer";


let initState: InitStateType;

beforeEach(() => {
    initState = {
        switchCounterView: false,
    };
})


test("isToggleActive should be changed to true", () => {
    let newState = switcherReducer(initState, setSwitchCounterView(true));

    expect(newState.switchCounterView).toBeTruthy();
    expect(initState.switchCounterView).toBeFalsy();
})
