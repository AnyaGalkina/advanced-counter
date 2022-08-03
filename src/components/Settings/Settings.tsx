import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import InputTypeNumber from "../Input/InputTypeNumber";
import {KEYSLOCALSTORAGE} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    setCount,
    setCounterModeActive,
    setMaxCountValue,
    setSettingMode,
    setStartCountValue
} from "../../redux/counter-reducer";

type PropsType = {
    isCounterModeActive?: boolean
}

const Settings: React.FC<PropsType> = ({isCounterModeActive}) => {

    const error = useSelector<AppStateType, boolean>(state => state.counterState.error);
    const maxCountValue = useSelector<AppStateType, number>(state => state.counterState.maxCountValue);
    const startCountValue = useSelector<AppStateType, number>(state => state.counterState.startCountValue);
    const dispatch = useDispatch();

    const [maxValue, setMax] = useState(maxCountValue);
    const [minValue, setMin] = useState(startCountValue);


    // useEffect(() => {
    //     let startValue = localStorage.getItem(KEYSLOCALSTORAGE.START);
    //     let maxValue = localStorage.getItem(KEYSLOCALSTORAGE.MAX);
    //     if (startValue) {
    //         setMin(JSON.parse(startValue));
    //     }
    //     if (maxValue) {
    //         setMax(JSON.parse(maxValue));
    //     }
    // }, []);


    const onClickHandler = () => {
        dispatch(setMaxCountValue(maxValue));
        dispatch(setStartCountValue(minValue));
        dispatch(setCount(minValue));
        dispatch(setSettingMode(false));
        dispatch(setCounterModeActive(true));
    }

   const isSetDisabled = minValue < 0 || maxValue <= minValue
    return (
        <div className="wrapper">
            <div>
                <InputTypeNumber
                    title={"max value"}
                    value={maxValue}
                    isSetDisabled={isSetDisabled}
                    onChangeCallback={setMax}

                    error={error}
                    minValue={minValue}
                    maxValue={maxValue}
                />
                <InputTypeNumber
                    title={"min value"}
                    value={minValue}
                    onChangeCallback={setMin}
                    isSetDisabled={isSetDisabled}

                    error={error}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </div>
            <div>
                <Button title={"set"} callback={onClickHandler}
                    disabled={isSetDisabled}
                    //     disabled={error}
                />
            </div>
        </div>

    );
};

export default Settings;