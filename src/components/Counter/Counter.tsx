import React from "react";
import CountDisplay from "./CountDisplay/CountDisplay";
import Button from "../Button/Button";
import {AppStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {setCount, setCounterModeActive} from "../../redux/counter-reducer";

type PropsType = {
    isToggleActive?: boolean
}

const Counter: React.FC<PropsType> = ({isToggleActive}) => {

    const settingMode = useSelector<AppStateType, boolean>(state => state.counterState.settingMode);
    const maxCountValue = useSelector<AppStateType, number>(state => state.counterState.maxCountValue);
    const startCountValue = useSelector<AppStateType, number>(state => state.counterState.startCountValue);
    const count = useSelector<AppStateType, number>(state => state.counterState.count);
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
                {isToggleActive &&
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