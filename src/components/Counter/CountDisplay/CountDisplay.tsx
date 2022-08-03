import React from "react";
import styles from "./Counter.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

type PropsType = {
    count: number;
    maxCountValue: number;
    settingMode: boolean;
}

const CountDisplay: React.FC<PropsType> = ({count, maxCountValue, settingMode}) => {

    const error = useSelector<AppStateType, boolean>(state => state.counterState.error);

    const numStyles = `${count===maxCountValue ? styles.countNumRed : styles.countNum}`
    const displayCounterStyle = `${error ? styles.error : settingMode ? "" : numStyles}`;

    return (
        <div className={styles.counter}>
            <span className={displayCounterStyle}>
                            {error ? "invalid value!" : settingMode ? "enter value and press 'set'" : count}
            </span>
        </div>
    );
}

export default CountDisplay;
