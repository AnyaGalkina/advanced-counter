import React from "react";
import CountDisplay from "./CountDisplay/CountDisplay";
import Button from "../Button/Button";
import {AppStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {setCount, setCounterModeActive} from "../../redux/counter-reducer";

type PropsType = {
    switchCounterView?: boolean
}

const Counter: React.FC<PropsType> = ({switchCounterView}) => {

    const {settingMode, maxCountValue, startCountValue, count}= useSelector<AppStateType, any>(state => state.counterState);
    const dispatch = useDispatch();

    const isIncActive = settingMode || count === maxCountValue;
    const isResetActive = settingMode || count === startCountValue;

    const incrementCount = () => {
        dispatch(setCount(count + 1));
    }

    const clearCount = () => {
        dispatch(setCount(startCountValue));
    }

    const onSettingsClickHandler = () => {
        dispatch(setCounterModeActive(false));
    }

    return (
        <div className="wrapper">
            <CountDisplay
                count={count}
                maxCountValue={maxCountValue}
                settingMode={settingMode}
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
                {switchCounterView &&
                    <Button
                        title={"settings"}
                        callback={onSettingsClickHandler}
                        disabled={false}
                    />
                }
            </div>
        </div>
    );
};

export default Counter;