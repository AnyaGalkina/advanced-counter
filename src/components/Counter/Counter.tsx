import React from "react";
import CountDisplay from "./CountDisplay/CountDisplay";
import Button from "../Button/Button";

type PropsType = {
    count: number | string;
    maxCountValue: number;
    error: boolean;
    isIncActive: boolean;
    isResetActive: boolean;
    incrementCount: () => void;
    clearCount: () => void;
    setIsSettingsActive: (isSettingsActive: boolean) => void
}

const Counter: React.FC<PropsType> = ({
                                          count, maxCountValue, error,
                                          isIncActive, isResetActive, incrementCount, clearCount,
                                          setIsSettingsActive
                                      }) => {

    const onClickHandler = () => {
        setIsSettingsActive(true)
    }

    return (
        <div className="wrapper">
            <CountDisplay
                count={count}
                maxCountValue={maxCountValue}
                error={error}
            />
            <div>
                <Button
                    disabled={isIncActive} title={"inc"}
                    callback={incrementCount}
                />
                <Button
                    disabled={isResetActive} title={"reset"}
                    callback={clearCount}
                />
                 <Button
                    title={"set"}
                    callback={onClickHandler}
                    disabled={false}
                />
            </div>
        </div>
    );
};

export default Counter;