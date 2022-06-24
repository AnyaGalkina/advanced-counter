import React from "react";
import styles from "./Button.module.css";

type PropsType = {
    title: string;
    className?: string;
    disabled?: boolean;
    callback: () => void
}

const Button: React.FC<PropsType> = ({
                                         title, className, disabled, callback
                                     }) => {

    const onClickHandler = () => {
        callback();
    }

    return (
        <button
            className={className ? className : styles.button}
            disabled={disabled}
            onClick={onClickHandler}
        >{title}</button>
    );
};

export default Button;