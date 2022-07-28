import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import InputTypeNumber from "../Input/InputTypeNumber";
import {KEYSLOCALSTORAGE} from "../../App";

type PropsType = {
    maxCountValue: number;
    startCountValue: number;
    setMaxCountValue: (maxValue: number) => void;
    setStartCountValue: (startValue: number) => void;
    setCount: (value: number) => void;
    error: boolean;
    setError: (error: boolean) => void;
    // setIsSettingsActive: (isSettingsActive: boolean) => void;
    setSettingMode:(settingMode: boolean) => void

}

const Settings: React.FC<PropsType> = ({
                                           maxCountValue, setMaxCountValue, setStartCountValue,
                                           startCountValue, setCount, error, setError,
                                           // setIsSettingsActive,
                                           setSettingMode
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
        if(minValue < 0) {
            setError(true);
            return undefined;
        }
        setMaxCountValue(maxValue);
        setStartCountValue(minValue);
        setCount(minValue);
        setSettingMode(false);
        // setIsSettingsActive(false);
    }

    const isDisabled = minValue < 0 || maxValue <= minValue || error;

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
                    setSettingMode={setSettingMode}
                    currentMinValue={minValue}

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
                    setSettingMode={setSettingMode}
                    currentMinValue={minValue}
                />
            </div>
            <div>
                <Button title={"set"} callback={onClickHandler} disabled={isDisabled}/>
            </div>
        </div>

    );
};

export default Settings;