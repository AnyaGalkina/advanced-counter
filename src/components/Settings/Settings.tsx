import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import InputTypeNumber from "../Input/InputTypeNumber";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setError, setValues} from "../../redux/counter-reducer";

type PropsType = {}

const Settings: React.FC<PropsType> = () => {

    const maxCountValue = useSelector<AppStateType, number>(state => state.counterState.maxCountValue);
    const startCountValue = useSelector<AppStateType, number>(state => state.counterState.startCountValue);
    const dispatch = useDispatch();

    const [maxValue, setMax] = useState(maxCountValue);
    const [minValue, setMin] = useState(startCountValue);

    const isSetDisabled = minValue < 0 || maxValue <= minValue

    useEffect(() => {
        if(isSetDisabled) {
            dispatch(setError(true));
        } else {
            dispatch(setError(false));
        }
    }, [isSetDisabled])


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

    const onSetClickHandler = () => {
        dispatch(setValues(minValue, maxValue))
    }

    return (
        <div className="wrapper">
            <div>
                <InputTypeNumber
                    title={"max value"}
                    value={maxValue}
                    onChangeCallback={setMax}
                    isSetDisabled={isSetDisabled}
                />
                <InputTypeNumber
                    title={"min value"}
                    value={minValue}
                    onChangeCallback={setMin}
                    isSetDisabled={isSetDisabled}
                />
            </div>
            <div>
                <Button title={"set"} callback={onSetClickHandler}
                    disabled={isSetDisabled}
                />
            </div>
        </div>

    );
};

export default Settings;