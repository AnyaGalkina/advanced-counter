import React, {ChangeEvent} from "react";
import styles from "./InputTypeNumber.module.css";
import {useDispatch} from "react-redux";
import {setError, setSettingMode} from "../../redux/counter-reducer";

type PropsType = {
    title: string;
    value: number;
    isSetDisabled: boolean;
    onChangeCallback: (value: number) => void;
    error: boolean;
    maxValue: number;
    minValue: number;
}

const InputTypeNumber: React.FC<PropsType> = ({
                                                  title, value, onChangeCallback,
                                                  error,
                                                  // minValue, maxValue
                                                  isSetDisabled
                                              }) => {


    const dispatch = useDispatch();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        let newValue = +event.currentTarget.value;
        onChangeCallback(newValue);
        dispatch(setSettingMode(true))


        // let isMinValueValid = minValue < 0;
        // let isValuesValid = maxValue && maxValue <= minValue;
        // if (isValuesValid || isMinValueValid){
        //             dispatch(setError(true));
        //         } else {
        //             dispatch(setError(false));
        //         }


        //!!!!!!!BIG QUESTION setState in conditions. Need Formik or there are other options??? error setting with delay,uncorrect UI rerander in counter

        if (isSetDisabled) {
            dispatch(setError(true));
        } else {
            dispatch(setError(false));
        }
    }

    const inputStyle = `${styles.input} ${isSetDisabled && styles.error}`;

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
