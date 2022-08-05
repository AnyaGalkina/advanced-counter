import React, {ChangeEvent} from "react";
import styles from "./InputTypeNumber.module.css";
import {useDispatch} from "react-redux";
import {setError, setSettingMode} from "../../redux/counter-reducer";

type PropsType = {
    title: string;
    value: number;
    isSetDisabled: boolean;
    onChangeCallback: (value: number) => void;
}

const InputTypeNumber: React.FC<PropsType> = ({
                                                  title, value, onChangeCallback,
                                                  isSetDisabled
                                              }) => {


    const dispatch = useDispatch();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        let newValue = +event.currentTarget.value;
        onChangeCallback(newValue);
        dispatch(setSettingMode(true))

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
            />
        </div>
    );
};

export default InputTypeNumber;
