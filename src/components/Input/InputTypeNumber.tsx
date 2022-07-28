import React, {ChangeEvent} from "react";
import styles from "./InputTypeNumber.module.css";

type PropsType = {
    title: string;
    value: number;
    limitMinValue: number;
    limitMaxValue?: number;
    onChangeCallback: (value: number) => void;
    setCount: (value: number) => void;
    setError: (error: boolean) => void;
    error: boolean;
    currentMinValue: number;
    setSettingMode:(settingMode: boolean) => void
}

const InputTypeNumber: React.FC<PropsType> = ({
                                              title, value, limitMaxValue, limitMinValue,
                                              error, setError,  onChangeCallback, setSettingMode, currentMinValue
                                          }) => {


    const inputStyle = `${styles.input} ${error && styles.error}`;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        let newValue = JSON.parse(event.currentTarget.value);

        onChangeCallback(newValue);
        setSettingMode(true)

        if ( currentMinValue < 0 || newValue <= limitMinValue || limitMaxValue && newValue >= limitMaxValue) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <div>
            <p className={styles.p}>{title}</p>
            <input
                className={inputStyle}
                value={value}
                type={"number"}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default InputTypeNumber;
