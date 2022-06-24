import React from "react";
import styles from "./Counter.module.css";

type PropsType = {
    count: number | string;
    maxCountValue: number;
    error: boolean
}

const CountDisplay: React.FC<PropsType> = ({
                                               count, error, maxCountValue
                                           }) => {

    const styleIsNumber = `${styles.counter} ${styles.countNum} ${count === maxCountValue && styles.error}`;
    const styleIsString = `${styles.counter} ${error && styles.error}`;
    const countIsNumber = typeof (count) === "number";

    const addStyle = countIsNumber ? styleIsNumber : styleIsString

    return (
        <div className={addStyle}>
            {count}
        </div>
    );
}

export default CountDisplay;
