import React from "react";
import styles from "./Counter.module.css";

type PropsType = {
    count: number | string;
    maxCountValue: number;
    error: boolean;
    settingMode: boolean;
}

const CountDisplay: React.FC<PropsType> = ({
                                               count, error, maxCountValue, settingMode
                                           }) => {
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
