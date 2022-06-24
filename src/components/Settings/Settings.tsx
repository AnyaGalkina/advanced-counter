import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import InputTypeNumber from "../Input/InputTypeNumber";
import {KEYSLOCALSTORAGE} from "../../App";

type PropsType = {
    maxCountValue: number;
    startCountValue: number;
    setMaxCountValue: (maxValue: number) => void;
    setStartCountValue: (startValue: number) => void;
    setCount: (value: string | number) => void;
    error: boolean;
    setError: (error: boolean) => void;
    setIsSettingsActive: (isSettingsActive: boolean) => void
}

const Settings: React.FC<PropsType> = ({
                                           maxCountValue, setMaxCountValue, setStartCountValue,
                                           startCountValue, setCount, error, setError,
                                           setIsSettingsActive
                                       }) => {

    const [maxValue, setMax] = useState(maxCountValue);
    const [minValue, setMin] = useState(startCountValue);

    useEffect(() => {
        let startValue = localStorage.getItem(KEYSLOCALSTORAGE.START);
        let maxValue = localStorage.getItem(KEYSLOCALSTORAGE.MAX);
        if (startValue) {
            setMin(JSON.parse(startValue));
        }
        if (maxValue) {
            setMax(JSON.parse(maxValue));
        }
    }, []);


    const onClickHandler = () => {
        setMaxCountValue(maxValue);
        setStartCountValue(minValue);
        setCount(minValue);
        setIsSettingsActive(false);
    }

    const isMaxEqual = maxValue === maxCountValue;
    const isMinEqual = minValue === startCountValue;

    const isDisabled = isMaxEqual && isMinEqual || error;

    return (
        <div className="wrapper">
            <div>
                <InputTypeNumber
                    title={"max value"}
                    value={maxValue}
                    onChangeCallback={setMax}
                    setCount={setCount}
                    limitMinValue={minValue}
                    error={error}
                    setError={setError}
                />
                <InputTypeNumber
                    title={"min value"}
                    value={minValue}
                    onChangeCallback={setMin}
                    setCount={setCount}
                    limitMinValue={0}
                    limitMaxValue={maxValue}
                    error={error}
                    setError={setError}
                />
            </div>
            <div>
                <Button title={"set"} callback={onClickHandler} disabled={isDisabled}/>
            </div>
        </div>

    );
};

export default Settings;