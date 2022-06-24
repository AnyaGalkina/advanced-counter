import React from 'react';
import Button from "../Button/Button";
import styles from "./LocalStorage.module.css"

type PropsType = {
    count: number;
    setCount: (count: number) => void
}

const LocalStorage: React.FC<PropsType> = ({count, setCount}) => {

    const setToLSHandler = () => {
        localStorage.setItem("count-value", JSON.stringify(count));
        localStorage.setItem("count-value+1", JSON.stringify(count + 1));
        setCount(count);
    }

    const getFromLSHandler = () => {
        let countValue = localStorage.getItem("count-value");
        if (countValue) {
            setCount(JSON.parse(countValue));
        }
    }

    const clearLSHandler = () => {
        localStorage.clear();
        setCount(0);
    }

    const removeFromLSHandler = () => {
        localStorage.removeItem("count-value+1");
    }

    return (
        <div >
            <Button className={styles.button}
                    title={"Set to LocalStorage"} callback={setToLSHandler}
            />
            <Button className={styles.button}
                    title={"Get from LocalStorage"} callback={getFromLSHandler}
            />
            <Button className={styles.button}
                    title={"Clear LocalStorage"} callback={clearLSHandler}
            />
            <Button className={styles.button}
                    title={"Remove from LocalStorage"} callback={removeFromLSHandler}
            />
        </div>
    );
};

export default LocalStorage;