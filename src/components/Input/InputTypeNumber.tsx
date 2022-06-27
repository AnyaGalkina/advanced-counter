import React, {ChangeEvent} from "react";
import styles from "./InputTypeNumber.module.css";

type PropsType = {
    title: string;
    value: number;
    limitMinValue: number;
    limitMaxValue?: number;
    onChangeCallback: (value: number) => void;
    setCount: (value: string | number) => void;
    setError: (error: boolean) => void;
    error: boolean;
}

const InputTypeNumber: React.FC<PropsType> = ({
                                              title, value, limitMaxValue, limitMinValue,
                                              error, setError, setCount, onChangeCallback
                                          }) => {


    const inputStyle = `${styles.input} ${error && styles.error}`;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        let newValue = JSON.parse(event.currentTarget.value);

        onChangeCallback(newValue);
        setCount("enter value and press 'set'");

        if (newValue < limitMinValue || limitMaxValue && newValue >= limitMaxValue) {
            // setCount("invalid value!");
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
                // min={0}
            />
        </div>
    );
};

export default InputTypeNumber;
