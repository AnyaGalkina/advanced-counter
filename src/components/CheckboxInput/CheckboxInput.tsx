import React from "react";
import {setSwitchCounterView} from "../../redux/switcher-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
    switchCounterView: boolean
}
const CheckboxInput: React.FC<PropsType> = ({switchCounterView}) => {
    const dispatch = useDispatch();

    const onCheckboxClickHandler = () => {
        dispatch(setSwitchCounterView(!switchCounterView))
    };

    return (
        <div className={"toggle"}>
            <span>switch counter mode</span>
            <input
                className={"checkbox"}
                type={"checkbox"}
                checked={switchCounterView}
                onClick={onCheckboxClickHandler}
            />
        </div>
    );
};

export default CheckboxInput;